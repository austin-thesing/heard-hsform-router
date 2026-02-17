/*
 * Generic build smoke-test file.
 * Safe to track in git for CI/PR validation.
 */

'use strict';

const BUILD_SMOKE_TEST = {
  name: 'build-smoke-test',
  version: '1.0.0',
  createdAt: new Date().toISOString(),
};

function makeSamplePayload(seed = Date.now()) {
  return {
    id: `smoke-${seed}`,
    tags: ['build', 'test', 'generic'],
    active: true,
  };
}

function getBuildSmokeSummary() {
  return {
    ...BUILD_SMOKE_TEST,
    payload: makeSamplePayload(),
  };
}

// Export for Node/CommonJS environments.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    BUILD_SMOKE_TEST,
    makeSamplePayload,
    getBuildSmokeSummary,
  };
}
