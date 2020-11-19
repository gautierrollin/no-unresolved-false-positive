module.exports = {
  env : {
    browser : true,
    es2021 : true
  },

  parserOptions : {
    ecmaVersion : 12,
    sourceType : "module"
  },

  plugins : [
    "import"
  ],

  rules : {
    "import/no-unresolved" : ["error"]
  },

  settings : {
    "import/resolver" : "webpack"
  }
};
