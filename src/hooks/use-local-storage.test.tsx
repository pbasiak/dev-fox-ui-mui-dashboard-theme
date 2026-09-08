import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useLocalStorage } from './use-local-storage';
describe('local demo persistence', () => {
  it('persists functional updates and restores them after remounting', () => {
    const { result, unmount } = renderHook(() => useLocalStorage('test:tasks', ['first']));
    act(() => result.current[1]((items) => [...items, 'second']));
    unmount();
    const restored = renderHook(() => useLocalStorage<string[]>('test:tasks', []));
    expect(restored.result.current[0]).toEqual(['first', 'second']);
  });
  it('synchronizes separate consumers of the same key', () => {
    const first = renderHook(() => useLocalStorage('test:shared', 'Alex'));
    const second = renderHook(() => useLocalStorage('test:shared', 'Alex'));
    act(() => first.result.current[1]('Robin'));
    expect(second.result.current[0]).toBe('Robin');
  });
  it('recovers from invalid JSON', () => {
    localStorage.setItem('test:invalid', '{bad json');
    const { result } = renderHook(() => useLocalStorage('test:invalid', ['initial']));
    expect(result.current[0]).toEqual(['initial']);
  });
  it('keeps edits in memory when storage is readable but full', () => {
    localStorage.setItem('test:quota', '0');
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Quota exceeded');
    });
    const { result } = renderHook(() => useLocalStorage('test:quota', 0));
    act(() => result.current[1]((value) => value + 1));
    act(() => result.current[1]((value) => value + 1));
    expect(result.current[0]).toBe(2);
  });
  it('continues in memory when browser storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Quota exceeded');
    });
    const { result } = renderHook(() => useLocalStorage('test:blocked', 0));
    act(() => result.current[1]((value) => value + 1));
    expect(result.current[0]).toBe(1);
  });
});
