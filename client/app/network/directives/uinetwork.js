define(['vis'], function (vis) {
    console.log(vis);
    function mapDirective() {
        return {
            restrict: 'A',
            scope: {},
            template: '<div class="map-canvas"></div>',
            link: function (scope, element, attrs, controller) {
                var nodes = new vis.DataSet([
                    {id: 1, label: 'Node 1'},
                    {id: 2, label: 'Node 2'},
                    {id: 3, label: 'Node 3'},
                    {id: 4, label: 'Node 4'},
                    {id: 5, label: 'Node 5'}
                ]);

                // create an array with edges
                var edges = new vis.DataSet([
                    {from: 1, to: 3},
                    {from: 1, to: 2},
                    {from: 2, to: 4},
                    {from: 2, to: 5}
                ]);

                // create a network
                var container = element.children()[0];

                // provide the data in the vis format
                var data = {
                    nodes: nodes,
                    edges: edges
                };
                var options = {};

                // initialize your network!
                var network = new vis.Network(container, data, options);
            }
        };
    }

    mapDirective.$inject = [];
    return mapDirective;
});