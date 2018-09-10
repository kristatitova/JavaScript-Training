const expected = [
  [false, false, false, false, false, false, false][
    (false, false, false, false, false, true, false)
  ][(false, false, true, false, true, true, false)][
    (false, false, false, true, true, false, false)
  ][(false, true, true, true, false, false, false)][
    (true, true, false, false, false, false, false)
  ][(true, true, false, false, false, false, false)]
];

module.exports = { given, expected };
