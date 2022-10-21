import { StatusIconPipe } from './status-icon.pipe';

describe('StatusIconPipe', () => {
  fit('create an instance', () => {
    const pipe = new StatusIconPipe();
    expect(pipe).toBeTruthy();
  });

  fit('Prospect should result in online', () => {
    const pipe = new StatusIconPipe(); // 1. SETUP: construct a new instance of the class.
    const x = pipe.transform('prospect'); // 2. INVOKE the method
    expect(x).toEqual('online'); // 3. VERIFY the result of the method matches what is expected.
  });

  fit('prospect (lowercase) should result in online', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('prospect');
    expect(x).toEqual('online');
  });

  fit('prOspEct (mixed case) should result in online', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('prOspect'.toLocaleLowerCase());
    expect(x).toEqual('online');
  });

  fit('purchased (lowercase) should result in money', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('purchased');
    expect(x).toEqual('money');
  });

  fit('pUrchased (mixed case) should result in money', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform('pUrchased'.toLocaleLowerCase());
    expect(x).toEqual('money');
  });

  fit('pUrchased (mixed case) should result in money', () => {
    const pipe = new StatusIconPipe();
    const x = pipe.transform(null);
    expect(x).toEqual('money');
  });



});
