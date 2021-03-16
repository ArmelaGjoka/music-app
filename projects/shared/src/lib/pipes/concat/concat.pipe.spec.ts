import { ConcatPipe } from './concat.pipe';

describe('ConcatPipe', () => {
  it('create an instance', () => {``
    const pipe = new ConcatPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms [a. b] to "a feat b"', () => {
    const pipe = new ConcatPipe();
    expect(pipe.transform(['a', 'b'], 'feat')).toBe('a feat b');
  });

  it('transforms [a. b] to "a, b"', () => {
    const pipe = new ConcatPipe();
    expect(pipe.transform(['a', 'b'])).toBe('a, b');
  });

  it('transforms [a] to "a"', () => {
    const pipe = new ConcatPipe();
    expect(pipe.transform(['a', 'feat'])).toBe('a');
  });

});
