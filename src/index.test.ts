import { FooBarChecker } from './index';

describe('FooBar checker', () => {
  let fooBarChecker: FooBarChecker;

  beforeEach(() => {
    fooBarChecker = new FooBarChecker();
  });

  it('should exist', () => {
    expect(fooBarChecker).toBeDefined();
  });

  it('should return "Foo", if input is number, that is multiple of 3', () => {
    expect(fooBarChecker.returnFooBar(3)).toBe('Foo');
    expect(fooBarChecker.returnFooBar(9)).toBe('Foo');
    expect(fooBarChecker.returnFooBar(27)).toBe('Foo');
    expect(fooBarChecker.returnFooBar(12)).toBe('Foo');
  });

  it('should return "Bar", if input is number, that is multiple of 5', () => {
    expect(fooBarChecker.returnFooBar(5)).toBe('Bar');
    expect(fooBarChecker.returnFooBar(25)).toBe('Bar');
    expect(fooBarChecker.returnFooBar(20)).toBe('Bar');
    expect(fooBarChecker.returnFooBar(35)).toBe('Bar');
  });

  it('should return "Foo, Bar", if input is number, that is multiple of 3 and 5', () => {
    expect(fooBarChecker.returnFooBar(15)).toBe('Foo, Bar');
    expect(fooBarChecker.returnFooBar(30)).toBe('Foo, Bar');
    expect(fooBarChecker.returnFooBar(45)).toBe('Foo, Bar');
    expect(fooBarChecker.returnFooBar(60)).toBe('Foo, Bar');
  });

  it("should return number as string, if input is number, that is not multiple of 3 or 5", () => {
    expect(fooBarChecker.returnFooBar(17)).toBe('17');
    expect(fooBarChecker.returnFooBar(1)).toBe('1');
    expect(fooBarChecker.returnFooBar(7)).toBe('7');
    expect(fooBarChecker.returnFooBar(13)).toBe('13');
  });
});
