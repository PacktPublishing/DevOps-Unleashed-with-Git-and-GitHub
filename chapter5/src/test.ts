import * as assert from 'assert';
import leftPad from './index';

function testLeftPad(): void {
  assert.strictEqual(leftPad('hello', 8), '   hello');
  assert.strictEqual(leftPad('world', 8, '-'), '---world');
  assert.strictEqual(leftPad('!', 3, '*'), '**!');
  assert.strictEqual(leftPad('123', 3), '123');
  console.log('All tests passed.');
}

testLeftPad();