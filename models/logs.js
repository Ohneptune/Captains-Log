const mongoose = require('mongoose');

const logsSchema = ({
    title:{
        type: String,
    },
    entry:{
        type: String,
    },
    shipIsBroken:{
        type: Boolean,
    }
})

const Logs = mongoose.model('Logs', logsSchema)

module.exports = Logs