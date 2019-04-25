import {
  barStyle,
  barWidth,
  thinnestBars,
  thickerBars,
  thickestBars
} from '../barStyle';

describe('barStyle', () => {
  test('returns thinnest width for thinnest bars', () => {
    thinnestBars.map(bar =>
      expect(barStyle({ bar }).flex).toEqual(`0 0 ${barWidth.thinnest}`)
    );
  });

  test('returns thicker width for thicker bars', () => {
    thickerBars.map(bar =>
      expect(barStyle({ bar }).flex).toEqual(`0 0 ${barWidth.thicker}`)
    );
  });

  test('returns thickest width for thickest bars', () => {
    thickestBars.map(bar =>
      expect(barStyle({ bar }).flex).toEqual(`0 0 ${barWidth.thickest}`)
    );
  });
});
