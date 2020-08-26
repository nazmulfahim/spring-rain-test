const isValidPhone = (value) => /^(?:\+?88)?01[3-9]\d{8}$/.test(value);

module.exports = isValidPhone;
