'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = undefined;
exports.assignToEmpty = assignToEmpty;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assignToEmpty() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _objectAssign2.default.apply(undefined, [{}].concat(args));
}

var assign = exports.assign = _objectAssign2.default;

exports.default = assignToEmpty;
