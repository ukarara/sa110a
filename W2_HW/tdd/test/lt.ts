import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../src/ccclodash.ts";


Deno.test("lt", () => {
  assertEquals(_.lt(1, 3))
  assertEquals(_.lt(3, 1))
})
