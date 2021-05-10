// IceServersHandler.js

var IceServersHandler = (function() {
    function getIceServers(connection) {
        // resiprocate: 3344+4433
        // pions: 7575
        var iceServers = [
         {
                'urls': [
                    'turn:14.141.53.98:3478',
                    'turn:14.141.53.98:3478?transport=tcp'
                ],
                'username': 'test',
                'credential': 'test1234#%'
            }
        ];

        return iceServers;
    }

    return {
        getIceServers: getIceServers
    };
})();
