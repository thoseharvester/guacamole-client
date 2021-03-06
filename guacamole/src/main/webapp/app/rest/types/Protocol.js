/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Service which defines the Protocol class.
 */
angular.module('rest').factory('Protocol', [function defineProtocol() {
            
    /**
     * The object returned by REST API calls when representing the data
     * associated with a supported remote desktop protocol.
     * 
     * @constructor
     * @param {Protocol|Object} [template={}]
     *     The object whose properties should be copied within the new
     *     Protocol.
     */
    var Protocol = function Protocol(template) {

        // Use empty object by default
        template = template || {};

        /**
         * The name which uniquely identifies this protocol.
         *
         * @type String
         */
        this.name = template.name;

        /**
         * An array of forms containing all known parameters for this protocol,
         * their types, and other information.
         *
         * @type Form[]
         * @default []
         */
        this.forms = template.forms || [];

    };

    return Protocol;

}]);