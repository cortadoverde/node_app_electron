/* */ 
"format cjs";
"use strict";

exports.__esModule = true;
exports.Property = Property;

function Property(node) {
  if (node.method) {
    node.method = false;
  }

  if (node.shorthand) {
    node.shorthand = false;
  }
}