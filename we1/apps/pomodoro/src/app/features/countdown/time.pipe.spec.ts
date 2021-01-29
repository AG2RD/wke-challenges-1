import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new TimePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('#fixDigit', () => {
    it('should return same value as literal if value > 9', () => {
      expect(pipe.fixDigit(10)).toEqual('10');
    });

    it('should return value prefixed by 0 if value < 9', () => {
      expect(pipe.fixDigit(8)).toEqual('08');
    });
  });

  describe('#transform', () => {
    it('should format numerical value into format mm:ss', () => {
      expect(pipe.transform(120)).toEqual('00:02:00');
      expect(pipe.transform(134)).toEqual('00:02:14');
      expect(pipe.transform(1534)).toEqual('00:25:34');
      expect(pipe.transform(11534)).toEqual('03:12:14');
      expect(pipe.transform(3660)).toEqual('01:01:00');
    });
  });
});
