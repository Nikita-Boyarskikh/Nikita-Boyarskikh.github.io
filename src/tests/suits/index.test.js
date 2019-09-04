import fetchMock from 'tests/mocks/fetch';

describe('Index', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('Example test', () => {
    expect(1).toBe(1);
  });
});
