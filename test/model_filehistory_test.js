'use strict';

var FileHistory = require('../lib/models/FileHistory');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['FileHistory'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'test new historical report generation for overview' : function(test) {
    var history = new FileHistory();
    var newReport = {"info":{"file":"lib/logger.js","fileShort":"lib/logger.js","fileSafe":"lib_logger_js","link":"files/lib_logger_js/index.html"},"complexity":{"aggregate":{"line":1,"complexity":{"sloc":{"physical":22,"logical":10},"cyclomatic":2,"halstead":{"operators":{"distinct":8,"total":25,"identifiers":["__stripped__"]},"operands":{"distinct":21,"total":37,"identifiers":["__stripped__"]},"length":62,"vocabulary":29,"difficulty":7.0476190476190474,"volume":301.1948216979095,"effort":2122.70636244241,"bugs":0.10039827389930317,"time":117.92813124680055}}},"functions":[{"name":"Logger","line":5,"complexity":{"sloc":{"physical":3,"logical":1},"cyclomatic":1,"halstead":{"operators":{"distinct":2,"total":2,"identifiers":["__stripped__"]},"operands":{"distinct":2,"total":4,"identifiers":["__stripped__"]},"length":6,"vocabulary":4,"difficulty":2,"volume":12,"effort":24,"bugs":0.004,"time":1.3333333333333333}}},{"name":"<anonymous>","line":17,"complexity":{"sloc":{"physical":6,"logical":2},"cyclomatic":1,"halstead":{"operators":{"distinct":4,"total":8,"identifiers":["__stripped__"]},"operands":{"distinct":6,"total":10,"identifiers":["__stripped__"]},"length":18,"vocabulary":10,"difficulty":3.3333333333333335,"volume":59.794705707972525,"effort":199.31568569324176,"bugs":0.019931568569324175,"time":11.073093649624543}}},{"name":"<anonymous>.undefined","line":19,"complexity":{"sloc":{"physical":3,"logical":2},"cyclomatic":2,"halstead":{"operators":{"distinct":4,"total":6,"identifiers":["__stripped__"]},"operands":{"distinct":7,"total":8,"identifiers":["__stripped__"]},"length":14,"vocabulary":11,"difficulty":2.2857142857142856,"volume":48.43204266092217,"effort":110.70181179639353,"bugs":0.016144014220307392,"time":6.150100655355196}}}],"maintainability":85.6967430926156,"module":"lib/logger.js"},"jshint":{"messages":[]}};
    history.addReport(newReport);

    test.equal(history[0].sloc, newReport.complexity.aggregate.complexity.sloc.physical);
    test.equal(history[0].lloc, newReport.complexity.aggregate.complexity.sloc.logical);
    test.equal(history[0].deliveredBugs, newReport.complexity.aggregate.complexity.halstead.bugs);
    test.equal(history[0].difficulty, newReport.complexity.aggregate.complexity.halstead.difficulty);
    test.equal(history[0].maintainability, newReport.complexity.maintainability);
    test.equal(history[0].functions, newReport.complexity.functions.length);
    test.equal(history[0].lintErrors, newReport.jshint.messages.length);
    test.done();
  },

};
