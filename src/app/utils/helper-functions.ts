export function ToRange(i: number): number[] {
    if (i) {
        return new Array(+i);
      } else {
          return new Array(0);
      }
}