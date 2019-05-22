disk = {
    
    get_data : function(){
        
        airscarp.plugin.shell.get("disk-usage", function(x){
            
            if(!x.s){
                airscarp.error("Something went wrong!");
                return false;
            }
            
            var data = x.data["disk_usage"];
            disk.show_table(data);
        });
    },
    
    
    show_table : function(data){
        
        var tbody = [];
        for(var i = 0; i < data.length; i++){
            
            var bar = '<div class="progress disk-progress-bar"><div class="progress-bar bg-warning" role="progressbar" style="width:' + data[i]["Use"] + '" aria-valuenow="' + data[i]["Use"] + '" aria-valuemin="0" aria-valuemax="100"></div></div>';
            
            tbody.push([
                "<tr>",
                    "<td>" + data[i]["Mounted"] + "</td>",
                    "<td>" + bar + "</td>",
                    "<td>" + data[i]["Filesystem"] + "</td>",
                    "<td>" + data[i]["Size"] + "</td>",
                    "<td>" + data[i]["Used"] + "</td>",
                    "<td>" + data[i]["Avail"] + "</td>",
                    "<td>" + data[i]["Use"] + "</td>",
                "</tr>",
            ].join(""));
        }
        
        $("#disk-usage-table tbody").html(tbody.join(""));
    },
};