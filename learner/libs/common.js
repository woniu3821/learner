const crypto = require('crypto');
module.exports = {
    MD5_LOCK: "fasjklfjkajirFJKALORTAOI.好的甲A/.$@HJKAFhjfdas",
    md5: function(str) {
        var obj = crypto.createHash('md5');
        obj.update('str');
        return obj.digest('hex');
    }
}