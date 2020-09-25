"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const policy = {
    defaultPolicy: {
        'default-src': ["'self'", 'data:', "'unsafe-inline'", "'unsafe-eval'"],
        'img-src': ["'self'", 'data:', 'www.google-analytics.com'],
        'script-src': [
            "'self'",
            "'unsafe-inline'",
            "'unsafe-eval'",
            'www.google-analytics.com'
        ]
    }
};
//# sourceMappingURL=csp.js.map