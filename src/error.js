function LintError (msg, source, obj) {
  this.msg = msg;
  this.opts = {
    line: source.start.line,
    column: source.start.column
  };
  if (obj) this.opts.obj = obj;

  return this;
}

module.exports = LintError;
