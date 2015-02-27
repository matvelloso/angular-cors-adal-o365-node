'use strict';

angular.module('docsApp')
.factory('searchSvc', ['$http', function ($http) {
        return {
            getItems: function () {
                var getOptions = {
                    headers: {
                        'Accept': 'application/json;odata=verbose;'
                    }
                }
                
                //We first call our own Node.JS backend (assume some business rule here, as well as the need to validate the client token)
                return $http.get(window.location.origin + "/api/secure/",
                                 {}
                ).then(function (result) {
                    //Then, we call SharePoint online
                    var baseUri = 'https://dxdemos-my.sharepoint.com/_api/me/';
                    
                    return $http.get(baseUri +
                                 'files?$select=id,name,lastModifiedBy,size,url',
                                 getOptions
                    ).then(function (results) {
                        var items = new Array();
                        var files = results.data.d;
                        for (var count = 0; count < files.results.length; count++) {
                            var item = files.results[count];
                            
                            items.push({
                                name: item.Name,
                                //Opens the Office web editor so users don't need Office installed
                                link: item.Url + '?web=1', 
                                size: item.Size,
                                lastModifiedBy: item.LastModifiedBy.Name,
                                isWord: item.Name.indexOf(".docx") !== -1
                            });
                        }
                        return items;
                    }, function (error) {
                        alert(error);
                    });
                }
                )
                
                
               
            }
        };
    }]);
