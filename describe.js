
// describ      : 테스트 단위를 묶는 가장 큰 단위
// test(), it() : 기본 테스트
// beforeEach   : test()가 실행할 때마다 실행하는 전처리기
// afterEach    : test()가 종료될 때마다 실해하는 후처리기

let temp;
describe("simple test", () => {
  beforeEach(() => {
    temp = 1;
  });
  
  afterEach(() => {
    temp = 0;
  });
  
  test('tmep is 1', () => {
    expect(temp).toBe(1); // true
  });
  
  test('temp is 1', () => {
    expect(temp).toBe(1); // true
  });
});