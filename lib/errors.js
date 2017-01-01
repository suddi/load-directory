'use strict';

module.exports.get = function (error) {
    const errors = {
        NO_PATH: 'require path not provided'
    };

    if (error) {
        return errors[error];
    }
    return errors;
};
