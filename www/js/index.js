/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var baseURL = "http://hd1.freebox.fr/pub/remote_control?code=50914410&key=";
var lastCommand = "";
var intervalRef = null;
var app = {
    initialize : function(){
        document.addEventListener("touchstart", function(e){
            var key = e.target.getAttribute("key");
            if(key){
                intervalRef = setInterval(function(){
                    app.freeRemoteSend(baseURL + key, function(data){
                        console.log(data);
                    });
                }, 50);
                console.log("create ", intervalRef)
            }
        });

        document.addEventListener("touchend", function(e){
            console.log("delete ", intervalRef)
            clearInterval(intervalRef);
        });
    },

    freeRemoteSend : function(url, callback){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                // alert(xhr.responseText);
            }
        }
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');;
        xhr.send();
    }
};

//app.initialize();
