import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import { expect } from "https://deno.land/x/tdd/mod.ts"
import * as _ from "../src/ccclodash";

Deno.test("unzip", () => {
  assertEquals(_.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);)
  //=> [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
})
