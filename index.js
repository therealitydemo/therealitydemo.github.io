var stage = "main";
var currentObject;
var currentSelectedPie = undefined;

$("#main_page").show();
$("#user_data_page").hide();
$("#terms_and_conditions").hide();

// var adjective_ratings_overall = [
//     {'name': 'Worst', 'from': -3, 'to': -0.736}, 
//     {'name': 'Poor', 'from': -0.736, 'to': -0.485}, 
//     {'name': 'Bad', 'from': -0.485, 'to': -0.105}, 
//     {'name': 'Fair', 'from': -0.105, 'to': 0.393}, 
//     {'name': 'Good', 'from': 0.393, 'to': 0.724}, 
//     {'name': 'Excellent', 'from': 0.724, 'to': 1.363}, 
//     {'name': 'Best', 'from': 1.363, 'to': 3}, 
// ];

var adjective_ratings_overall = [
    {'name': 'Class VI', 'from': -3, 'to': 0.2304}, 
    {'name': 'Class V', 'from': 0.2304, 'to': 0.6996}, 
    {'name': 'Class IV', 'from': 0.6996, 'to': 1.1059}, 
    {'name': 'Class III', 'from': 1.1059, 'to': 1.5014}, 
    {'name': 'Class II', 'from': 1.5014, 'to': 1.8882}, 
    {'name': 'Class I', 'from': 1.8882, 'to': 3}, 
];

var adjective_ratings_SP = [
    {'name': 'Class VI', 'from': -3, 'to': 0.6383}, 
    {'name': 'Class V', 'from': 0.6383, 'to': 1.3455}, 
    {'name': 'Class IV', 'from': 1.3455, 'to': 1.8905}, 
    {'name': 'Class III', 'from': 1.8905, 'to': 2.1837}, 
    {'name': 'Class II', 'from': 2.1837, 'to': 2.5610}, 
    {'name': 'Class I', 'from': 2.5610, 'to': 3}, 
];


var adjective_ratings_INV = [
    {'name': 'Class VI', 'from': -3, 'to': 0.2478}, 
    {'name': 'Class V', 'from': 0.2478, 'to': 0.8255}, 
    {'name': 'Class IV', 'from': 0.8255, 'to': 1.2730}, 
    {'name': 'Class III', 'from': 1.2730, 'to': 1.5153}, 
    {'name': 'Class II', 'from': 1.5153, 'to': 1.9248}, 
    {'name': 'Class I', 'from': 1.9248, 'to': 3},
];


var adjective_ratings_REAL = [
    {'name': 'Class VI', 'from': -3, 'to': -0.3206}, 
    {'name': 'Class V', 'from': -0.3206, 'to': 0.0425}, 
    {'name': 'Class IV', 'from': 0.0425, 'to': 0.6863}, 
    {'name': 'Class III', 'from': 0.6863, 'to': 1.2430}, 
    {'name': 'Class II', 'from': 1.2430, 'to': 1.9402}, 
    {'name': 'Class I', 'from': 1.9402, 'to': 3},
];

var adjective_ratings_GP = [
    {'name': 'Class VI', 'from': -3, 'to': 0.8475}, 
    {'name': 'Class V', 'from': 0.8475, 'to': 1.5118}, 
    {'name': 'Class IV', 'from': 1.5118, 'to': 1.9164}, 
    {'name': 'Class III', 'from': 1.9164, 'to': 2.1497}, 
    {'name': 'Class II', 'from': 2.1497, 'to': 2.5865}, 
    {'name': 'Class I', 'from': 2.5865, 'to': 3}, 
];

var adjective_ratings_hmd = [
    {'name': 'Class VI', 'from': -3, 'to': 0.4821}, 
    {'name': 'Class V', 'from': 0.4821, 'to': 0.9580}, 
    {'name': 'Class IV', 'from': 0.9580, 'to': 1.4324}, 
    {'name': 'Class III', 'from': 1.4324, 'to': 1.8132}, 
    {'name': 'Class II', 'from': 1.8132, 'to': 2.3994}, 
    {'name': 'Class I', 'from': 2.3994, 'to': 3},
];


var adjective_ratings_monoscopic = [
    {'name': 'Class VI', 'from': -3, 'to': 0.0607}, 
    {'name': 'Class V', 'from': 0.0607, 'to': 0.6771}, 
    {'name': 'Class IV', 'from': 0.6771, 'to': 1.3980}, 
    {'name': 'Class III', 'from': 1.3980, 'to': 1.6674}, 
    {'name': 'Class II', 'from': 1.6674, 'to': 1.8980}, 
    {'name': 'Class I', 'from': 1.8980, 'to': 3}, 
];


var adjective_ratings_projection_display = [
    {'name': 'Class VI', 'from': -3, 'to': 0.1250}, 
    {'name': 'Class V', 'from': 0.1250, 'to': 0.6107}, 
    {'name': 'Class IV', 'from': 0.6107, 'to': 0.7309}, 
    {'name': 'Class III', 'from': 0.7309, 'to': 1.0138}, 
    {'name': 'Class II', 'from': 1.0138, 'to': 1.1050}, 
    {'name': 'Class I', 'from': 1.1050, 'to': 3}, 
];


var adjective_ratings = [
    {'name': 'Overall', 'ranges': adjective_ratings_overall},
    {'name': 'GP', 'ranges': adjective_ratings_GP},
    {'name': 'SP', 'ranges': adjective_ratings_SP},
    {'name': 'INV', 'ranges': adjective_ratings_INV},
    {'name': 'REAL', 'ranges': adjective_ratings_REAL},
    {'name': '3D - HMD VR', 'ranges': adjective_ratings_hmd},
    {'name': '3D - Monoscopic', 'ranges': adjective_ratings_monoscopic},
    {'name': 'Projection Display', 'ranges': adjective_ratings_projection_display}];


var rootPapers = [];

var overallObject = {'name': 'Overall', 'attr': 'rating_scale', 'value': []};
var subscalesObject = {'name': 'Subscales', 'value': []};

var spObject = {'name': 'SP', 'attr': 'class_sp', 'value': []};
var gpObject = {'name': 'GP', 'attr': 'class_gp', 'value': []};
var invObject = {'name': 'INV', 'attr': 'class_inv', 'value': []};
var realObject = {'name': 'REAL', 'attr': 'class_real', 'value': []};

subscalesObject.value.push(spObject);
subscalesObject.value.push(gpObject);
subscalesObject.value.push(invObject);
subscalesObject.value.push(realObject);

var visualDisplaysObject = {'name': 'Visual_Displays', 'value': []};

var hmdObject = {'name': '3D - HMD VR', 'attr': 'class', 'value': []};
var monoscopicObject = {'name': '3D - Monoscopic', 'attr': 'class', 'value': []};
var projectionObject = {'name': 'Projection Display', 'attr': 'class', 'value': []};

visualDisplaysObject.value.push(hmdObject);
visualDisplaysObject.value.push(monoscopicObject);
visualDisplaysObject.value.push(projectionObject);

var maxNumberofStudiesForYear = 0, fromYear = 2019, toYear = 2019;
var numberofBins = 30;
var rangeforEachBin = Math.round(7 / numberofBins * 10) / 10;
var maxNumberofBins = 0;
var numberofParticipants = 0;

// var colors = [
//     {"name": "Worst", "color":"#EBF5FB"},
//     {"name": "Poor", "color":"#D6EAF8"},
//     {"name": "Bad", "color":"#AED6F1"},
//     {"name": "Fair", "color":"#85C1E9"},
//     {"name": "Good", "color":"#5DADE2"},
//     {"name": "Excellent", "color":"#3498DB"},
//     {"name": "Best", "color":"#3092C7"}
// ];

// var colors = [
//     {"name": "Worst", "color":"#ebf5fb"},
//     {"name": "Poor", "color":"#a9d4ef"},
//     {"name": "Bad", "color":"#69b3e4"},
//     {"name": "Fair", "color":"#3498db"},
//     {"name": "Good", "color":"#2c82bb"},
//     {"name": "Excellent", "color":"#2670a1"},
//     {"name": "Best", "color":"#21618c"}
// ];

// var colors = [
//     {"name": "Worst", "color":"#fbf0ff"},
//     {"name": "Poor", "color":"#cce2fd"},
//     {"name": "Bad", "color":"#a9d7fc"},
//     {"name": "Fair", "color":"#80cafb"},
//     {"name": "Good", "color":"#51bbfa"},
//     {"name": "Excellent", "color":"#31b1f9"},
//     {"name": "Best", "color":"#3092c7"}
// ];

var colors = [
    {"name": 'Class VI', "color":"#cce2fd"},
    {"name": 'Class V', "color":"#a9d7fc"},
    {"name": 'Class IV', "color":"#80cafb"},
    {"name": 'Class III', "color":"#51bbfa"},
    {"name": 'Class II', "color":"#31b1f9"},
    {"name": 'Class I', "color":"#3092c7"}
];

var user_data_color = "#F39C12";

var layout_colors = ["#F8F9F9", "#E5E7E9", "#CACFD2", "#F2F3F4", "#D7DBDD"];
var code_layout_color = "#EBDEF0";

var standard_total_each_item = [];
var standard_sp_each_item = [];
var standard_inv_each_item = [];
var standard_real_each_item = [];
var standard_gp_each_item = [];
var standard_total_each_item_hmd = [];
var standard_total_each_item_mono = [];
var standard_total_each_item_proj = [];

jQuery(window).ready(function () {
    d3.csv("data/August2020_RomanClassName/IPQReport_EachStudy_SubScale_August2020_RomanClassName.csv", function (error, data)
    {      
        for(var i = 0; i < subscalesObject.value.length; i++)
        {
            var div = "#main_hmd_pie_chart";
            var col = "standard_sp_each_item";
            if(subscalesObject.value[i].name === "SP")
            {
                div = "#main_sp_pie_chart";
                col = "standard_sp_each_item";
            }
            else if(subscalesObject.value[i].name === "GP")
            {
                div = "#main_gp_pie_chart";
                col = "standard_gp_each_item";
            }
            else if(subscalesObject.value[i].name === "INV")
            {
                div = "#main_inv_pie_chart";
                col = "standard_inv_each_item";
            }
            else if(subscalesObject.value[i].name === "REAL")
            {
                div = "#main_real_pie_chart";
                col = "standard_real_each_item";
            }

            var e = ParseData(data, subscalesObject.value[i].name, subscalesObject.value[i].attr, col);

            var adjectiveRatingsObject = e.value.find(function(element) {
                return element.name === "AdjectiveRatings";
            });

            var width = 0.85 * $(div).width();        
            DrawPie(adjectiveRatingsObject.value, width, width,"", div, false, "");
            subscalesObject.value[i] = e;
        }     
    });

    d3.csv("data/August2020_RomanClassName/IPQReport_EachCondition_VisualDisplay_August2020_RomanClassName.csv", function (error, data)
    {      
        for(var i = 0; i < visualDisplaysObject.value.length; i++)
        {
            var e = ParseData(data, visualDisplaysObject.value[i].name, visualDisplaysObject.value[i].attr, "standard_total_each_item", "display");

            var adjectiveRatingsObject = e.value.find(function(element) {
                return element.name === "AdjectiveRatings";
            });

            var div = "#main_hmd_pie_chart";
            if(e.name === "3D - Monoscopic")
            {
                div = "#main_monoscopic_pie_chart";
            }
            else if(e.name === "Projection Display")
            {
                div = "#main_projectiondisplay_pie_chart";
            }
            
            var width = 0.85 * $(div).width();        
            DrawPie(adjectiveRatingsObject.value, width, width,"", div, false, "");      
            visualDisplaysObject.value[i] = e;
        }     
        
    });

    d3.csv("data/August2020_RomanClassName/IPQReport_EachStudy_August2020_RomanClassName.csv", function (error, data)
    {      
        overallObject = ParseData(data, "Overall", "class", "standard_total_each_item");
        var adjectiveRatingsObject = overallObject.value.find(function(element) {
            return element.name === "AdjectiveRatings";
        });

        var overallObject1 = overallObject.value.find(function(e){
            return e.name === "Overall";
        });

        var summaryObject = overallObject1.value.find(function(e){
            return e.name === "Summary";
        });

        $("info_main_category").html("Overall");
        $("#info_main_participants").html(summaryObject.participants);
        $("#info_main_percent").html("100%");
        $("#info_main_adjective_rating").html("All Classes");   
        $("#info_main_years").html(summaryObject.years.length);  
        $("#info_main_user_studies").html(summaryObject.user_studies.length);   
        $("#info_main_publications").html(summaryObject.publications.length);    
        
        // var byYearObject = summaryObject.value.find(function(e){
        //     return e.name === "ByYear";
        // });

        // var byScoreObject = summaryObject.value.find(function(e){
        //     return e.name === "ByScore";
        // });

        // var studiesObject = summaryObject.value.find(function(e){
        //     return e.name === "Studies";
        // });

        AddScoreBarChart(summaryObject, "#main_bar_chart_for_score");
        AddYearBarChart(summaryObject, "#main_bar_chart_for_year");
        WriteTable(summaryObject, "#main_list_publications");

        SortBy(true, false, true);
        SortBy(false, true, true);
        
        _currentObject = overallObject;
        _currentClassObject = summaryObject;


        // _currentObject = summaryObject;

        // _currentObject = _currentObject.value.find(function(e)
        // {
        //     return e.name === "Overall";
        // });

        // _currentObject = _currentObject.value[0];

        var width = 0.85 * $("#main_pie_chart").width();

        DrawPie(adjectiveRatingsObject.value, width, width,"", "#main_pie_chart", false, "");    
    });

    AddAppendix();

});

function ParseData(data, name, attr, col = "", type = "ipq")
{
    var mainObject = {'name': name, 'attr': attr, 'value': []};

    // Data Summary
    var overallObject = {'name': 'Overall', 'value': [{"name":'Summary',"number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]}]};
    var adjectiveRatingsObject = {'name': 'AdjectiveRatings', 'value': []};

    var display = "";
    var subscale = "";
    if(type === "display")
    {
        display = name;
        subscale = "";
    }
    else
    {
        display = "";
        subscale = name;
    }
    
    // adjectiveRatingsObject.value.push({"name": "Worst", "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    // adjectiveRatingsObject.value.push({"name": "Poor", "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    // adjectiveRatingsObject.value.push({"name": "Bad", "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    // adjectiveRatingsObject.value.push({"name": "Fair", "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    // adjectiveRatingsObject.value.push({"name": "Good", "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    // adjectiveRatingsObject.value.push({"name": "Excellent", "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    // adjectiveRatingsObject.value.push({"name": "Best", "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    
    adjectiveRatingsObject.value.push({"name": 'Class VI', "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    adjectiveRatingsObject.value.push({"name": 'Class V', "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    adjectiveRatingsObject.value.push({"name": 'Class IV', "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    adjectiveRatingsObject.value.push({"name": 'Class III', "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    adjectiveRatingsObject.value.push({"name": 'Class II', "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    adjectiveRatingsObject.value.push({"name": 'Class I', "condition": "Previous Studies", "subscale": subscale, "display": display, "number": "0", "percent": "", "color":"", "participants": "0", "publications": [], "years": [], "user_studies": [], "value": [{"name": "Studies", "value": []}, {"name": "ByYear", "value": []}, {"name": "ByScore", "value": []}]});
    
    mainObject.value.push(overallObject);
    mainObject.value.push(adjectiveRatingsObject);

    data.forEach(function(d){
        numberofParticipants += d.number_of_study_participants;
        
        mainObject.value.forEach(function(object)
        {
            object.value.forEach(function(e)
            {
                if(((e.name === "Summary" && object.name === "Overall") || 
                (e.name === d[attr] && object.name === "AdjectiveRatings")) && (type === "ipq" || (type === "display" && name === d["visual_display"])))
                {
                    e.number++;
                            
                    var selectedColor = colors.find(function(element) {
                        return element.name === d[attr];
                    });

                    e.color = selectedColor.color;
                    e.participants = parseInt(e.participants) + parseInt(d.number_of_study_participants);
                    if(!e.years.includes(d.year))
                    {
                        e.years.push(d.year);
                    }

                    if(!e.publications.includes(d.paperid))
                    {
                        e.publications.push(d.paperid);
                    }

                    if(!e.user_studies.includes(d.studyid))
                    {
                        e.user_studies.push(d.studyid);
                    }
                    
                    e.value.forEach(function(e2)
                    {
                        if(e2.name === "Studies")
                        {
                            e2.value.push(d);
                        }

                        if(e2.name == "ByYear")
                        {
                            var flag = false;

                            e2.value.forEach(function(e3){
                                if(e3.year === d.year)
                                {
                                    e3.number++;
                                    e3.value.push(d);
                                    flag = true;

                                    if(e3.number > maxNumberofStudiesForYear)
                                        maxNumberofStudiesForYear = e3.number;
                                }
                            });

                            if(!flag)
                            {
                                var element = {"year": d.year, "number": 1, "value": []};
                                element.value.push(d);

                                e2.value.push(element);
                            }

                            if(d.year < fromYear)
                            {
                                fromYear = d.year;
                            }
                            else if(d.year > toYear)
                            {
                                toYear = d.year;
                            }
                        }

                        if(e2.name == "ByScore")
                        {
                            var flag = false;
                            var bin = Math.round(parseFloat(d[col]) / rangeforEachBin) * rangeforEachBin;                            
                            bin = parseFloat(bin.toFixed(1));

                            e2.value.forEach(function(e3){
                                if(e3.bin === bin)
                                {
                                    e3.number ++;
                                    e3.value.push(d);
                                    e3.type = type;
                                    e3.name = name;

                                    flag = true;

                                    if(e3.number > maxNumberofBins)
                                    {
                                        maxNumberofBins = e3.number;
                                    }
                                }
                            });

                            if(!flag)
                            {
                                var element = {"bin": bin, "number": 1, "percent": 0, "value": []};
                                element.value.push(d);

                                e2.value.push(element);
                            }
                        }
                    });
                }
            });
        });

        //For computing percentiles
        if(type === "ipq")
        {
            if(name === "Overall")
            {
                standard_total_each_item.push(d[col]);
            }
            else if(name === "SP")
            {
                standard_sp_each_item.push(d[col]);
            }
            else if(name === "INV")
            {
                standard_inv_each_item.push(d[col]);
            }
            else if(name === "REAL")
            {
                standard_real_each_item.push(d[col]);
            }
            else if(name === "GP")
            {
                standard_gp_each_item.push(d[col]);
            }
        }        
        else if(type === "display")
        {
            if(d.visual_display === name)
            {
                if(name === "3D - HMD VR")
                {
                    standard_total_each_item_hmd.push(d[col]);
                }
                else if(name === "3D - Monoscopic")
                {
                    standard_total_each_item_mono.push(d[col]);
                }
                else if(name === "Projection Display")
                {
                    standard_total_each_item_proj.push(d[col]);
                }
            }            
        }
    });

    var summaryObject = overallObject.value.find(function(element) {
        return element.name === "Summary";
    });

    adjectiveRatingsObject.value.forEach(function(e){   
        e.percent = Math.round(e.number / summaryObject.number * 100000) / 1000;
        // e.value.forEach(function(e2){
        //     if(e2.name === "Summary")
        //     {
        //         e2.percent = Math.round(e2.number / data.length * 10000) / 100;

        //         if(e.name != "All")
        //         {
        //             overallObject.value.push({"name": e.name, "percent": e2.percent, "color": e2.color, "number": e2.number});
        //         }
        //     }
        // });            
    });

    return mainObject;
}

function AddYearBarChart(object, div){
    
    $(div).html("");
    
    var data = object.value.find(function(element) {
        return element.name === "ByYear";
    });

    var margin = {top: 20, right: 10, bottom: 70, left: 50},
        width = $(div).width() - margin.left - margin.right,
        height = 275 - margin.top - margin.bottom;

    d3.select(div).html("");

    var barChartSVG = d3.select(div).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");

    var yearDomain = [];
    
    for(var i = fromYear; i <= toYear; i++)
    {
        yearDomain.push(i);
    }

    var x = d3.scale.ordinal().domain(yearDomain).rangeRoundBands([0, width], .05);
    var y = d3.scale.linear().domain([0,maxNumberofStudiesForYear]).range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(2);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5);

    barChartSVG.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
    .selectAll("text")
        .style("text-anchor", "end")
        .style("font-size", "12px") 
        .attr("dx", "-0.5em")
        .attr("dy", "0.5em")
        .attr("transform", "rotate(-45)");

    barChartSVG.append("text")             
        .attr("transform",
                "translate(" + (width/2) + " ," + 
                                (height + margin.top + 25) + ")")
        .style("text-anchor", "middle")
        .style("font-size", "14px") 
        .text("year");  

    barChartSVG.append("g")
        .attr("class", "y axis")
        .style("font-size", "12px") 
        .call(yAxis)
    .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", "-3em")
        .attr("x", 0 - (height / 2))
        .attr("dy", "0.71em")
        .style("text-anchor", "middle")
        .style("font-size", "14px") 
        .text("number of user studies");

    barChartSVG.selectAll("bar")
        .data(data.value)
    .enter().append("rect")
        .style("fill", function(d, i){
            return object.color
        })
        .attr("x", function(d) { return x(d.year); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.number); })
        .attr("height", function(d) { return height - y(d.number); });

    barChartSVG.append("text")
        .attr("transform",
            "translate(" + (width/2) + " ," + 
                        (height + margin.top + 40) + ")")
        .attr("text-anchor", "middle")  
        .style("font-size", "14px") 
        .style("font-weight", "bold")  
        .text("Number of user studies per year");
}

function AddScoreBarChart(object, div){
    
    $(div).html("");

    var data = object.value.find(function(element) {
        return element.name === "ByScore";
    });

    var margin = {top: 20, right: 20, bottom: 70, left: 50},
        width = $(div).width() - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;

    d3.select(div).html("");

    var barChartSVG = d3.select(div).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");

    var binDomain = [];

    for(var i = -3; i <= 3; )
    {
        binDomain.push(i);
        i += rangeforEachBin;
        i = parseFloat(i.toFixed(1));
    }

    var x = d3.scale.ordinal().domain(binDomain).rangeBands([0, width]);
    var y = d3.scale.linear().domain([0,maxNumberofBins]).range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(1);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5);

    barChartSVG.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
    .selectAll("text")
        .style("text-anchor", "end")
        .style("font-size", "12px") 
        .attr("dx", "-0.5em")
        .attr("dy", "0.5em")
        .attr("transform", "rotate(-45)");

    barChartSVG.append("g")
        .attr("class", "y axis")                
        .style("font-size", "12px") 
        .call(yAxis)
    .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", "-3em")
        .attr("x", 0 - (height / 2))
        .attr("dy", "0.71em")
        .style("text-anchor", "middle")
        .style("font-size", "14px") 
        .text("number of user studies");

    barChartSVG.append("text")             
        .attr("transform",
                "translate(" + (width/2) + " ," + 
                                (height + margin.top + 25) + ")")
        .style("text-anchor", "middle")                
        .style("font-size", "14px") 
        .text("rating scale");                    

    barChartSVG.selectAll("bar")
        .data(data.value)
    .enter().append("rect")
        .style("fill", function(d, i) {
            return object.color;
        })
        //.style("fill", object.color)
        .attr("x", function(d) { 
            return x(d.bin); 
        })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { 
            return y(d.number); 
        })
        .attr("height", function(d) { 
            return height - y(d.number); 
        });

    var text1 = " ";
    var text2 = " ";
    if(object.name == "Summary")
    {
        text1 += "for all classes"
    }
    else
    {
        text1 = "for " + object.name;
    }

    if(typeof object.subscale !== "undefined")
    {
        if(object.subscale == "Overall" || object.subscale == "")
        {
            text2 += " overall average";
        }
        else if(object.subscale == "REAL")
        {
            text2 += " Experienced Realism sub-scale average";
        }
        else if(object.subscale == "INV")
        {
            text2 += " Involvement sub-scale average";
        }
        else if(object.subscale == "SP")
        {
            text2 += " Spatial Presence sub-scale average";
        }
        else if(object.subscale == "GP")
        {
            text2 += " General Presence sub-scale average";
        }    
    }
    else
    {
        if(typeof _category !== "undefined")
        {
            if(_category == "SP")
            {
                text2 += " Spatial Presence sub-scale average";
            }
            else if(_category == "INV")
            {
                text2 += " Involvement sub-scale average";
            }
            else if(_category == "REAL")
            {
                text2 += " Experienced Realism sub-scale average";
            }
            else if(_category == "GP")
            {
                text2 += " General Presence sub-scale average";
            }
            else
            {
                text2 += " overall average";
            }
        }
    }

    
    if(object.display != "" && typeof object.display !== "undefined")
    {
        text1 += " with " + object.display;
    }

    barChartSVG.append("text")           
        .attr("transform",
            "translate(" + (width/2) + " ," + 
                            (height + margin.top + 40) + ")")
        .attr("text-anchor", "middle")  
        .style("font-size", "14px") 
        .style("font-weight", "bold")  
        .text("Distribution of" + text2 + " rating scores from previous user studies " + text1);
}

function UpdateInfo(stage, object, option = "")
{
    if(stage === "main")
    {
        AddScoreBarChart(object, "#main_bar_chart_for_score");
        AddYearBarChart(object, "#main_bar_chart_for_year");
        WriteTable(object, "#main_list_publications");
        
        var overallObject = currentObject.value.find(function(element) {
            return element.name === "Overall";
        });

        var summaryObject = overallObject.value.find(function(element) {
            return element.name === "Summary";
        });

        var category = "";
        if(object.subscale === "")
            category = object.display;
        else 
            category = object.subscale;

        $("#info_main_category").html(category);
        $("#info_main_participants").html(object.participants);
        $("#info_main_percent").html(object.percent);
        $("#info_main_adjective_rating").html(object.name);   
        $("#info_main_years").html(object.years.length);  
        $("#info_main_user_studies").html(object.user_studies.length);   
        $("#info_main_publications").html(object.publications.length);    
    }   
    else if(stage === "user_data")
    {
        AddScoreBarChart(object, "#user_data_bar_chart_for_score_" + object.condition);
    } 
}

function WriteTable(data, div)
{    
    var html = "";

    var detailObject = data.value.find(function(element) {
        return element.name === "Studies";
    });

    html += 
        '<div class="table-container">' +
            '<table class="table" id="reported_papers_table">' +
                '<thead>' +
                    '<tr style="background-color: gainsboro;">' +
                        '<th><abbr title="Title">Title</abbr></th>' +
                        '<th><abbr title="Author">Author</abbr></th>' +
                        '<th><abbr title="AdjectiveRating">Adjective Rating</abbr></th>' +
                        '<th><abbr title="Score">Score</abbr></th>' +
                        '<th><abbr title="Participants">Number of Participants</abbr></th>' +
                        '<th><abbr title="Year">Year</abbr></th>' +
                        '<th><abbr title="Published in">Published in</abbr></th>' +
                        '<th><abbr title="Link">Link</abbr></th>' +
                    '</tr>' +
                '</thead>' +
                '<tfoot>' +
                    '<tr style="background-color: gainsboro;">' +
                        '<th><abbr title="Title">Title</abbr></th>' +
                        '<th><abbr title="Author">Author</abbr></th>' +
                        '<th><abbr title="AdjectiveRating">Adjective Rating</abbr></th>' +
                        '<th><abbr title="Score">Score</abbr></th>' +
                        '<th><abbr title="Participants">Number of Participants</abbr></th>' +
                        '<th><abbr title="Year">Year</abbr></th>' +
                        '<th><abbr title="Published in">Published in</abbr></th>' +
                        '<th><abbr title="Link">Link</abbr></th>' +
                    '</tr>' +
                '</tfoot>' +
                '<tbody height="200px">';

    var rating_scale = "class";

    if(data.subscale === "Overall")
    {
        rating_scale = 'class';
    }
    else if(data.subscale === "SP")
    {
        rating_scale = 'class_sp';
    }
    else if(data.subscale === "GP")
    {
        rating_scale = 'class_gp';
    }
    else if(data.subscale === "INV")
    {
        rating_scale = 'class_inv';
    }
    else if(data.subscale === "REAL")
    {
        rating_scale = 'class_real';
    }

    detailObject.value.forEach(function(e){         
        html = html + '<tr style="background-color:' + data.color + '">' +
                        '<td>' + e.title + '</td>' + 
                        '<td>' + e.authors + '</td>' + 
                        '<td>' + e[rating_scale] + '</td>' + 
                        '<td>' + Math.round(e.standard_total_each_item * 1000) / 1000 + '</td>' + 
                        '<td>' + e.number_of_total_participants + '</td>' + 
                        '<td>' + e.year + '</td>' + 
                        '<td>' + e.source + '</td>' + 
                        '<td><a href="' + e.articleURL + '">Link</a></td>' +                    
                    '</tr>';
    });

    html += '</tbody>' +
        '</table>' +
    '</div>';
    
    $(div).html(html);
}

//User input
var uploadedFileData = "";
var loadFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
        var dataURL = reader.result;

        $("#user_data_file_name").html(input.files[0].name);
        $("#main_page").hide();
        $("#user_data_page").show();
        $("#header").css('background-color', '#E9F7EF');
        $("#navbar").css('background-color', '#E9F7EF');

        uploadedFileData = reader.result;
        HandleUploadedData();
        stage="user_data";
    };

    reader.readAsText(input.files[0]);
};

function HandleUploadedData()
{
    var uploadedDataLines = uploadedFileData.split("\n");

    var research_id = "", number_of_participants = "", experiment_design = "", number_of_experimental_conditions ="", number_of_entries ="";
    var tmp = uploadedDataLines[0].split(",");
    research_id = tmp[1];
    
    tmp = uploadedDataLines[1].split(",");
    experiment_design = tmp[1];

    tmp = uploadedDataLines[2].split(",");
    number_of_experimental_conditions = tmp[1];
    
    tmp = uploadedDataLines[3].split(",");
    number_of_participants = tmp[1];

    tmp = uploadedDataLines[4].split(",");
    number_of_entries = tmp[1];
    
    var rootUploadedData = [{'name': 'Summary', 'research_id': research_id, 'number_of_participants': number_of_participants, 'number_of_experimental_conditions': number_of_experimental_conditions, 'number_of_entries': number_of_entries}];

    var rawData = {'name': 'Raw', 'value': []};
    var averageData = {'name': 'Average', 'value': [
        {
            'name': 'Overall---AAA',
            'value': [
                {'name':'Overall', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}, 
                {'name':'GP', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}, 
                {'name':'SP', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}, 
                {'name':'INV', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}, 
                {'name':'REAL', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}
            ]
        }
        ]};

    var arrayData = {'name': 'Array', 'value': []};
    
    var overallSPScore = 0, overallGPScore = 0, overallINVScore = 0, overallREALScore = 0;
    var overallSPCount = 0, overallGPCount = 0, overallINVCount = 0, overallREALCount = 0;
                
    for(var i = 7; i < parseInt(number_of_entries) + 7; i++)
    {
        var eachSPScore = 0, eachGPScore = 0, eachINVScore = 0, eachREALScore = 0;
        var averageSPScore = 0, averageGPScore = 0, averageINVScore = 0, averageREALScore = 0, averageEach = 0;

        var subStrings = uploadedDataLines[i].split(",");
        var participant_id = subStrings[0], visual_display = subStrings[1], experimental_condition = subStrings[2];
        var item_1 = parseInt(subStrings[3]), 
            item_2 = parseInt(subStrings[4]), 
            item_3 = parseInt(subStrings[5]), 
            item_4 = parseInt(subStrings[6]), 
            item_5 = parseInt(subStrings[7]), 
            item_6 = parseInt(subStrings[8]), 
            item_7 = parseInt(subStrings[9]), 
            item_8 = parseInt(subStrings[10]), 
            item_9 = parseInt(subStrings[11]), 
            item_10 = parseInt(subStrings[12]), 
            item_11 = parseInt(subStrings[13]), 
            item_12 = parseInt(subStrings[14]), 
            item_13 = parseInt(subStrings[15]), 
            item_14 = parseInt(subStrings[16]);

        var isLineValid = true;

        for(var j = 3; j < 17; j++)
        {
            if(subStrings[j] === "")
            {
                alert("Line " + (i + 1) + ". Score for item " + (j - 2) + " is missing! This entry will be discarded!");
                isLineValid = false;
            }
        }

        if(isLineValid)
        {
            rawData.value.push({'participant_id': participant_id, 'visual_display': visual_display, 'experimental_condition': experimental_condition,
                'item_1': item_1, 
                'item_2': item_2,
                'item_3': item_3,
                'item_4': item_4,
                'item_5': item_5,
                'item_6': item_6, 
                'item_7': item_7,
                'item_8': item_8,
                'item_9': item_9,
                'item_10': item_10, 
                'item_11': item_11,
                'item_12': item_12, 
                'item_13': item_13,
                'item_14': item_14});

            eachSPScore += item_3 - item_6 + item_9 + item_10 - item_13;
            eachGPScore += item_8;
            eachINVScore += item_1 + item_7 - item_11 + item_14;
            eachREALScore += item_2 + item_4 + item_5 + item_12;

            averageSPScore = eachSPScore / 5;
            averageGPScore = eachGPScore / 1;
            averageINVScore = eachINVScore / 4;
            averageREALScore = eachREALScore / 4;
            averageEach = (eachSPScore + eachGPScore + eachINVScore + eachREALScore) / 14;            

            overallSPScore += eachSPScore;
            overallGPScore += eachGPScore;
            overallINVScore += eachINVScore;
            overallREALScore += eachREALScore;           

            overallSPCount += 5;
            overallGPCount += 1;
            overallINVCount += 4;
            overallREALCount += 4;

            var consideredObject = ['Overall---AAA'];

            if(number_of_experimental_conditions > 1)
            {
                consideredObject.push(experimental_condition);
            }

            consideredObject.forEach(function(obj){
                var conditionObject = averageData.value.find(function(e){
                    return e.name.replace(/\s/g,'') === obj.replace(/\s/g,'');
                });

                if(conditionObject === undefined)
                {
                    conditionObject = {
                        'name': experimental_condition,
                        'value': [
                            {'name':'Overall', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}, 
                            {'name':'GP', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}, 
                            {'name':'SP', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}, 
                            {'name':'INV', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}, 
                            {'name':'REAL', 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]}
                        ]
                    };

                    averageData.value.push(conditionObject);
                }

                var displayObject = conditionObject.value.find(function(e){
                    return e.name === visual_display;
                });
    
                if(displayObject === undefined)
                {
                    conditionObject.value.push({'name': visual_display, 'adjective_rating': '---', 'count': 0, 'total': 0, 'average':  0, 'value':[]});
                }
    
                conditionObject.value.forEach(function(e){
                    var eachObject = e.value.find(function(e1)
                    {
                        return e1.name === experimental_condition;
                    });
        
                    if(eachObject === undefined)
                    {
                        eachObject = {"name": experimental_condition, "value":[], "participants": []};   
                        e.value.push(eachObject);
                    }
    
                    eachObject.participants.push(participant_id);
    
                    if(e.name === "Overall" || e.name === visual_display)
                    {
                        eachObject.value.push(averageEach);
                        e.count += 14;
                        e.total += eachSPScore + eachGPScore + eachINVScore + eachREALScore;
                    }
                    else if(e.name === "GP")
                    {
                        eachObject.value.push(averageGPScore);
                        e.count += 1;
                        e.total += eachGPScore;
                    }
                    else if(e.name === "SP")
                    {
                        eachObject.value.push(averageSPScore);
                        e.count += 5;
                        e.total += eachSPScore;
                    }
                    else if(e.name === "INV")
                    {
                        eachObject.value.push(averageINVScore);
                        e.count += 4;
                        e.total += eachINVScore;
                    }
                    else if(e.name === "REAL")
                    {
                        eachObject.value.push(averageREALScore);
                        e.count += 4;
                        e.total += eachREALScore;
                    }
                });
            });            

            var retObject = arrayData.value.find(function(e)
            {
                return e.name === experimental_condition;
            });

            if(retObject === undefined)
            {
                retObject = {"name": experimental_condition, "value":[], "participants": []};   
                arrayData.value.push(retObject);
            }

            for(var j = 0; j < 14; j++)
            {
                retObject.participants.push(participant_id);
            }

            retObject.value.push(item_1,item_2);
            retObject.value.push(item_3);
            retObject.value.push(item_4);
            retObject.value.push(item_5);
            retObject.value.push((-1) * item_6);
            retObject.value.push(item_7);
            retObject.value.push(item_8);
            retObject.value.push(item_9);
            retObject.value.push(item_10);
            retObject.value.push((-1) * item_11);
            retObject.value.push(item_12);
            retObject.value.push((-1) * item_13);
            retObject.value.push(item_14);
        }
    }

    averageData.value.forEach(function(c)
    {
        c.value.forEach(function(e){        
        
            e.average = Math.round (e.total / e.count * 1000) / 1000;
    
            var adjectiveRating = "---";
            var average_score = e.average;
            
            var retObject = adjective_ratings.find(function(ea){
                return ea.name.replace(/\s/g,'') === e.name.replace(/\s/g,'')
            });
    
            if(retObject !== undefined)
            {
                retObject.ranges.forEach(function(r)
                {
                    if(r.name === 'Class VI' && average_score >= r.from && average_score < r.to)
                    {
                        adjectiveRating = 'Class VI';
                    }
                    else if(r.name === 'Class V' && average_score >= r.from && average_score < r.to)
                    {
                        adjectiveRating = 'Class V';
                    }
                    else if(r.name === 'Class IV' && average_score >= r.from && average_score < r.to)
                    {
                        adjectiveRating = 'Class IV';
                    }
                    else if(r.name === 'Class III' && average_score >= r.from && average_score <= r.to)
                    {
                        adjectiveRating = 'Class III';
                    }
                    else if(r.name === 'Class II' && average_score > r.from && average_score <= r.to)
                    {
                        adjectiveRating = 'Class II';
                    }
                    else if(r.name === 'Class I' && average_score > r.from && average_score <= r.to)
                    {
                        adjectiveRating = 'Class I';
                    }
                    // else if(r.name === "Best" && average_score > r.from && average_score <= r.to)
                    // {
                    //     adjectiveRating = "Best";
                    // }
                });
            }
    
            e.adjective_rating = adjectiveRating;
        });
    });
        
    rootUploadedData.push(rawData);
    rootUploadedData.push(averageData);

    //Generate HTML
    var html = "";
    $("#user_data_summary").empty();

    for(var i = 0; i < averageData.value.length; i++)
    {
        html = "";

        html += 
            `<div class="row" style="margin-bottom: 10px; background-color: ` + layout_colors[i] + `;">
                <section class="section">
                    <div class="container">
                        <div class="columns">`;
        
        if(averageData.value[i].name === "Overall---AAA")
        {
            html += `       <div class="column is-4 has-text-centered">
                                <div class="box">
                                    <h2 class="subtitle">
                                        <h1 class="title">Whole Experiment</h1>
                                    </h2>
                                </div>
                            </div>`;
        }
        else
        {
            html += `       <div class="column is-4 has-text-centered">
                                <div class="box">
                                    <h2 class="subtitle">
                                        Condition <h1 class="title">` + averageData.value[i].name + `</h1>
                                    </h2>
                                </div>
                            </div>`;
        }

        html += `       <div class="column"></div>
                            <div class="column is-8">
                                <div class="container">
                                    <nav class="level is-mobile">
                                        <div class="level-item has-text-centered is-small">
                                            <div>
                                            <p class="heading">OVERALL</p>
                                            <p class="title" id="info_user_data_overall_` + averageData.value[i].name + `">...</p>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div>
                                            <p class="heading">GENERAL PRESENCE</p>
                                            <p class="title" id="info_user_data_gp_` + averageData.value[i].name + `">...</p>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div>
                                            <p class="heading">SPATIAL PRESENCE</p>
                                            <p class="title" id="info_user_data_sp_` + averageData.value[i].name + `">...</p>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div>
                                            <p class="heading">INVOLVEMENT</p>
                                            <p class="title" id="info_user_data_inv_` + averageData.value[i].name + `">...</p>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered_` + averageData.value[i].name + `">
                                            <div>
                                            <p class="heading">EXPERIENCE REALISM</p>
                                            <p class="title" id="info_user_data_real_` + averageData.value[i].name + `">...</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class='row'>
                    <div class="columns">
                        <div class="column"></div>
                        <div class="column is-11">
                            <div class="box"> 
                                <div class="columns">
                                    <div class="column has-text-centered is-4" >                                    
                                        <div class="row" id="user_data_pie_chart_` + averageData.value[i].name + `">                                     
                                        </div> 
                                    </div>
                                    <div class="column has-text-centered is-8">
                                        <div class="row">
                                            <div class="columns">
                                                <div class="column has-text-centered is-3" id="user_data_gp_pie_chart_` + averageData.value[i].name + `">
                                                </div>
                                                <div class="column has-text-centered is-3" id="user_data_sp_pie_chart_` + averageData.value[i].name + `">
                                                </div>
                                                <div class="column has-text-centered is-3" id="user_data_inv_pie_chart_` + averageData.value[i].name + `">
                                                </div>
                                                <div class="column has-text-centered is-3" id="user_data_real_pie_chart_` + averageData.value[i].name + `">
                                                </div>                                                
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="columns">
                                                <div class="column has-text-centered is-3" id="user_data_hmd_pie_chart_` + averageData.value[i].name + `">
                                                </div>
                                                <div class="column has-text-centered is-3" id="user_data_monoscopic_pie_chart_` + averageData.value[i].name + `">
                                                </div>
                                                <div class="column has-text-centered is-3" id="user_data_projectiondisplay_pie_chart_` + averageData.value[i].name + `">
                                                </div>
                                                <div class="column has-text-centered is-3" id="user_data_appendix_` + averageData.value[i].name + `">
                                                </div>
                                            </div>
                                        </div> 
                                    </div>   
                                </div>         
                            </div>
                        </div>   
                        <div class="column"></div>
                    </div>
                </div>            
                <div class="row">
                    <div class="columns">
                        <div class="column">                                    
                        </div>                                                 
                        <div class="column is-11 is-centered">
                            <div class="columns">
                                <div class="column is-5 is-vcentered">
                                    <div class="box summary-text" class="" id="user_data_text_report_` + averageData.value[i].name + `">  
                                                                                
                                    </div>
                                </div>
                                <div class="column is-7">
                                    <div class="box" class="" id="user_data_bar_chart_for_score_` + averageData.value[i].name + `">                                           
                                    </div>
                                </div>
                            </div>                                     
                        </div>   
                        <div class="column">                                    
                        </div>         
                    </div>
                </div>
            </div>`;

        $("#user_data_summary").append(html);

        $("#info_user_data_overall_" + averageData.value[i].name).html(averageData.value[i].value[0].adjective_rating);
        $("#info_user_data_gp_" + averageData.value[i].name).html(averageData.value[i].value[1].adjective_rating);
        $("#info_user_data_sp_" + averageData.value[i].name).html(averageData.value[i].value[2].adjective_rating);
        $("#info_user_data_inv_" + averageData.value[i].name).html(averageData.value[i].value[3].adjective_rating);
        $("#info_user_data_real_" + averageData.value[i].name).html(averageData.value[i].value[4].adjective_rating);   
        
        var user_data_report_text = "";

        if(i === 0)
        {
            var user_data_report_text = '<p>In general, the analysis on IPQ scores showed that this experiment provided users with level "' + averageData.value[i].value[0].adjective_rating +
                '" of presence in comparison with previous user studies. For more details, the level presence for sub-scales of IPQ including general presence, spatial presence, involvement, and experience realism are "' +
                averageData.value[0].value[1].adjective_rating + '", "' + 
                averageData.value[0].value[2].adjective_rating + '", "' + 
                averageData.value[0].value[3].adjective_rating + '", and "' + 
                averageData.value[0].value[4].adjective_rating + '", ' + 
                ' respectively. ';

            if(averageData.value[0].value.length > 5)
            {
                user_data_report_text += 'The ' + averageData.value[0].value[5].name + ' visual display used in this study provided a "' + averageData.value[0].value[5].adjective_rating + 
                    '" level of presence. ';
            }

            if(averageData.value[0].value.length > 6)
            {
                user_data_report_text += 'In addition, users perceived presence at level "' + averageData.value[0].value[6].adjective_rating + 
                    '" when they experienced with the ' + averageData.value[0].value[6].name + ' display. ';
            }

            if(averageData.value[0].value.length > 7)
            {
                user_data_report_text += 'For the ' + averageData.value[0].value[7].name + ' visual display, the level of presence was eventually at "' + averageData.value[0].value[7].adjective_rating + 
                    '" in comparison with previous studies using the same technology. ';
            }

            user_data_report_text += '</p>';
        }
        else if(i === 1)
        {
            var user_data_report_text = '<p>Condition ' + averageData.value[i].name + ' generally present users with "' + averageData.value[i].value[0].adjective_rating +
                '" level of presence. In addition, the classes for general presence and spatial presence are "' +
                averageData.value[0].value[1].adjective_rating + '" and "' + 
                averageData.value[0].value[2].adjective_rating + '", respectively. "' + 
                averageData.value[0].value[3].adjective_rating + '" and "' + 
                averageData.value[0].value[4].adjective_rating + '" are, furthermore, categories for involvement and experience realism.</p>';
        }
        else if(i === 2)
        {
            var user_data_report_text = '<p>Users reported that they perceived the "' + averageData.value[i].value[0].adjective_rating + '" level of presence in condition ' + averageData.value[i].name + 
            '. In this condition, the level of presence for general presence was "' +
            averageData.value[0].value[1].adjective_rating + '" and "' + 
            averageData.value[0].value[2].adjective_rating + '" was the level of presence of spatial presence. While involvement sub-scale had level "' + 
            averageData.value[0].value[3].adjective_rating + '" of presence, "' + 
            averageData.value[0].value[4].adjective_rating + '" is the class for experience realism.</p>';
        }
        
        $("#user_data_text_report_" + averageData.value[i].name).html(user_data_report_text);             

        var width = 0.85 * $("#user_data_pie_chart_" + averageData.value[i].name).width();

        IllustrateUserData(Object.assign({}, overallObject), width, width, "#user_data_pie_chart_" + averageData.value[i].name, averageData.value[i].value[0], averageData.value[i].name);

        subscalesObject.value.forEach(function(e)
        {
            var div = "#user_data_sp_pie_chart_" + averageData.value[i].name;
            if(e.name === "SP")
            {
                div = "#user_data_sp_pie_chart_" + averageData.value[i].name;
            }
            else if(e.name === "GP")
            {
                div = "#user_data_gp_pie_chart_" + averageData.value[i].name;
            }
            else if(e.name === "INV")
            {
                div = "#user_data_inv_pie_chart_" + averageData.value[i].name;
            }
            else if(e.name === "REAL")
            {
                div = "#user_data_real_pie_chart_" + averageData.value[i].name;
            }

            width = 0.85 * $(div).width();
            
            averageData.value[i].value.forEach(function(f){
                if(e.name === f.name)
                {
                    IllustrateUserData(Object.assign({}, e), width, width, div, f, averageData.value[i].name);
                }
            });
        });

        visualDisplaysObject.value.forEach(function(e)
        {
            var div = "";

            if(e.name.replace(/\s/g,'') === ("3D - HMD VR").replace(/\s/g,''))
            {
                div = "#user_data_hmd_pie_chart_" + averageData.value[i].name;
            }
            else if(e.name.replace(/\s/g,'') === ("3D - Monoscopic").replace(/\s/g,''))
            {
                div = "#user_data_monoscopic_pie_chart_" + averageData.value[i].name;
            }
            else if(e.name === "Projection Display_" + averageData.value[i].name)
            {
                div = "#user_data_projectiondisplay_pie_chart";
            }

            if(div != "")
            {
                width = 0.85 * $(div).width();
            
                averageData.value[i].value.forEach(function(f){
                    if(e.name.replace(/\s/g,'') === f.name.replace(/\s/g,''))
                    {
                        IllustrateUserData(Object.assign({}, e), width, width, div, f, averageData.value[i].name);
                    }
                });
            }        
        });

        AddAppendix(true, "#user_data_appendix_" + averageData.value[i].name);
    }

    //ANALYSIS
    document.getElementById("analysis_code").innerHTML = '<p class="code">Initializing...</p><br><p class="code" style="font-size: 10px;">(might be up to 2 minutes)</p><br><button class="button is-info is-loading is-large">Initializing...</button>';
    
    //Statistics
    var code = `
## import libraries
#import io
#import base64
#import numpy as np
#from scipy import stats
#import pandas as pd
#import statsmodels.stats.api as sm
#from statsmodels.stats.anova import AnovaRM
#from statsmodels.regression.mixed_linear_model import MixedLM
#from statsmodels.formula.api import ols
#import matplotlib.pyplot as plt
#from js import window, eval as jseval

data = ` + JSON.stringify(arrayData.value) + `
alpha = 0.05
is_normal_distribution = True
number_conditions = ` + number_of_experimental_conditions + `

standard_total_each_item = [` + standard_total_each_item + `]
standard_sp_each_item = [` + standard_sp_each_item+ `]
standard_inv_each_item = [` + standard_inv_each_item+ `]
standard_real_each_item = [` + standard_real_each_item+ `]
standard_gp_each_item = [` + standard_gp_each_item+ `]
standard_total_each_item_hmd = [` + standard_total_each_item_hmd+ `]
standard_total_each_item_mono = [` + standard_total_each_item_mono+ `]
standard_total_each_item_proj = [` + standard_total_each_item_proj+ `]

standard_total_each_item.sort()
standard_sp_each_item.sort()
standard_inv_each_item.sort()
standard_real_each_item.sort()
standard_gp_each_item.sort()
standard_total_each_item_hmd.sort()
standard_total_each_item_mono.sort()
standard_total_each_item_proj.sort()

## compute quantiles
print("Quantiles for overall scores")
print(stats.mstats.mquantiles(standard_total_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))

print("Quantiles for SP scores")
print(stats.mstats.mquantiles(standard_sp_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))

print("Quantiles for INV scores")
print(stats.mstats.mquantiles(standard_inv_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))

print("Quantiles for REAL scores")
print(stats.mstats.mquantiles(standard_real_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))

print("Quantiles for GP scores")
print(stats.mstats.mquantiles(standard_gp_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))

print("Quantiles for 3D - HMD scores")
print(stats.mstats.mquantiles(standard_total_each_item_hmd, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))

print("Quantiles for 3D - Monoscopic scores")
print(stats.mstats.mquantiles(standard_total_each_item_mono, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))

print("Quantiles for Projection Display scores")
print(stats.mstats.mquantiles(standard_total_each_item_proj, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))


## logging
document = window.document`;

    if(number_of_experimental_conditions == 2)
    {
        code += `
document.getElementById("header_analysis_statistics").innerHTML = '<div class="container"> <div class="columns"> <div class="column"></div> <div class="column is-6 has-text-centered"> <div class="box"> <h1 class="title">ANALYSIS STATISTICS</h1> </div> </div> <div class="column"></div> <div class="column is-6"> <div class="box has-text-centered" style="background-color: #F8F9F9;" id="analysis_methods"> <table class="table"> <thead> <tr> <th rowspan="2">Experiment Design</th> <th colspan="2">Data Distribution</th> </tr> <tr> <th>Normal</th> <th>Non-normal</th> </tr> </thead> <tbody> <tr> <th>Between-subject</th> <td id="between_subject_anova">Between-subjects ANOVA</td> <td id="mann_whitneyu">Mann-Whitney U</td> </tr> <tr> <th>Within-subject</th> <td id="within_subject_anova">Repeated-measures ANOVA</td> <td id="wilcoxon_signed_rank">Wilcoxon Signed-Rank</td> </tr> </tbody> </table> </div> </div> <div class="column"></div> </div></div>'`;
    }

    code += `
analysis_code = document.getElementById("analysis_code")
analysis_code.style.textAlign = "left"

analysis_code.innerHTML = '<p class="code comment">  ## import libraries<p>'
analysis_code.innerHTML += '<p class="code"> import numpy as np<p>'
analysis_code.innerHTML += '<p class="code"> from scipy import stats<p>'
analysis_code.innerHTML += '<p class="code"> import pandas as pd<p>'
analysis_code.innerHTML += '<p class="code"> import statsmodels.stats.api as sm<p>'
analysis_code.innerHTML += '<p class="code"> from statsmodels.stats.anova import AnovaRM<p>'
analysis_code.innerHTML += '<p class="code"> from statsmodels.formula.api import ols<p>'
analysis_code.innerHTML += '<p class="code"> import matplotlib.pyplot as mlplot<p>'
analysis_code.innerHTML += '<p class="code"> data = ' + str(data) + '<p>'
analysis_code.innerHTML += '<p class="code"> alpha = 0.05<p>'
analysis_code.innerHTML += '<p class="code"> is_normal_distribution = True<p></br>'

analysis_code.innerHTML += '<p class="code"> standard_total_each_item = ' + str(standard_total_each_item) + '<p>'
analysis_code.innerHTML += '<p class="code"> standard_sp_each_item =  ' + str(standard_sp_each_item) + '<p>'
analysis_code.innerHTML += '<p class="code"> standard_inv_each_item =  ' + str(standard_inv_each_item) + '<p>'
analysis_code.innerHTML += '<p class="code"> standard_real_each_item =  ' + str(standard_real_each_item) + '<p>'
analysis_code.innerHTML += '<p class="code"> standard_gp_each_item =  ' + str(standard_gp_each_item) + '<p>'
analysis_code.innerHTML += '<p class="code"> standard_total_each_item_hmd =  ' + str(standard_total_each_item_hmd) + '<p>'
analysis_code.innerHTML += '<p class="code"> standard_total_each_item_mono =  ' + str(standard_total_each_item_mono) + '<p>'
analysis_code.innerHTML += '<p class="code"> standard_total_each_item_proj =  ' + str(standard_total_each_item_proj) + '<p>'


## compute quantiles
analysis_code.innerHTML += '<p class="comment code"> # percentiles at 50th, 75th, 90th, 95th, and 99th for overall scores <p>'
analysis_code.innerHTML += '<p class="code"> print(stats.mstats.mquantiles(standard_total_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))<p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(stats.mstats.mquantiles(standard_total_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0)) + '<p>'  

analysis_code.innerHTML += '<p class="comment code"> # percentiles at 50th, 75th, 90th, 95th, and 99th for SP scores <p>'
analysis_code.innerHTML += '<p class="code"> print(stats.mstats.mquantiles(standard_sp_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))<p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(stats.mstats.mquantiles(standard_sp_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0)) + '<p>'  

analysis_code.innerHTML += '<p class="comment code"> # percentiles at 50th, 75th, 90th, 95th, and 99th for INV scores <p>'
analysis_code.innerHTML += '<p class="code"> print(stats.mstats.mquantiles(standard_inv_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))<p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(stats.mstats.mquantiles(standard_inv_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0)) + '<p>'  

analysis_code.innerHTML += '<p class="comment code"> # percentiles at 50th, 75th, 90th, 95th, and 99th for REAL scores <p>'
analysis_code.innerHTML += '<p class="code"> print(stats.mstats.mquantiles(standard_real_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))<p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(stats.mstats.mquantiles(standard_real_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0)) + '<p>'  

analysis_code.innerHTML += '<p class="comment code"> # percentiles at 50th, 75th, 90th, 95th, and 99th for GP scores <p>'
analysis_code.innerHTML += '<p class="code"> print(stats.mstats.mquantiles(standard_gp_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))<p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(stats.mstats.mquantiles(standard_gp_each_item, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0)) + '<p>'  

analysis_code.innerHTML += '<p class="comment code"> # percentiles at 50th, 75th, 90th, 95th, and 99th for 3D - HMD scores <p>'
analysis_code.innerHTML += '<p class="code"> print(stats.mstats.mquantiles(standard_total_each_item_hmd, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))<p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(stats.mstats.mquantiles(standard_total_each_item_hmd, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0)) + '<p>'  

analysis_code.innerHTML += '<p class="comment code"> # percentiles at 50th, 75th, 90th, 95th, and 99th for 3D - Monoscopic scores <p>'
analysis_code.innerHTML += '<p class="code"> print(stats.mstats.mquantiles(standard_total_each_item_mono, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))<p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(stats.mstats.mquantiles(standard_total_each_item_mono, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0)) + '<p>'  

analysis_code.innerHTML += '<p class="comment code"> # percentiles at 50th, 75th, 90th, 95th, and 99th for Projection Display scores <p>'
analysis_code.innerHTML += '<p class="code"> print(stats.mstats.mquantiles(standard_total_each_item_proj, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0))<p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(stats.mstats.mquantiles(standard_total_each_item_proj, prob=[0.5, 0.75, 0.90, 0.95, 0.99], alphap = 0, betap = 0)) + '<p>'  

`;  


    if(number_of_experimental_conditions < 3)
    {
        var overallScoreObject = averageData.value[0].value.find(function(e){
            return e.name === "Overall";
        });

        var spScoreObject = averageData.value[0].value.find(function(e){
            return e.name === "SP";
        });
        var gpScoreObject = averageData.value[0].value.find(function(e){
            return e.name === "GP";
        });
        var realScoreObject = averageData.value[0].value.find(function(e){
            return e.name === "REAL";
        });
        var invScoreObject = averageData.value[0].value.find(function(e){
            return e.name === "INV";
        });

        code += `

## assign data to variable
analysis_code.innerHTML += '<p class="code comment">  ## assign data to variable<p>'

whole_experiment_overall = []
whole_experiment_gp = []
whole_experiment_sp = []
whole_experiment_inv = []
whole_experiment_real = []

analysis_code.innerHTML += '<p class="code"> whole_experiment_overall = []<p>'
analysis_code.innerHTML += '<p class="code"> whole_experiment_gp = []<p>'
analysis_code.innerHTML += '<p class="code"> whole_experiment_sp = []<p>'
analysis_code.innerHTML += '<p class="code"> whole_experiment_inv = []<p>'
analysis_code.innerHTML += '<p class="code"> whole_experiment_real = []<p>'
`;
        var fullAverageArray = [];

        for(var i = 1; i <= number_of_experimental_conditions; i++)
        {
            code += `
## init variable ` + i + `
variable_` + i + `_name = "` + overallScoreObject.value[i-1].name + `"
variable_` + i + `_value_overall = ` + JSON.stringify(overallScoreObject.value[i-1].value) + `
variable_` + i + `_participantsid_overall = ` + JSON.stringify(overallScoreObject.value[i-1].participants) + `
variable_` + i + `_mean_overall = round(np.mean(variable_` + i + `_value_overall), 3)
variable_` + i + `_std_overall = round(np.std(variable_` + i + `_value_overall), 3)
whole_experiment_overall += variable_` + i + `_value_overall

variable_` + i + `_value_gp = ` + JSON.stringify(gpScoreObject.value[i-1].value) + `
variable_` + i + `_participantsid_gp = ` + JSON.stringify(gpScoreObject.value[i-1].participants) + `
variable_` + i + `_mean_gp = round(np.mean(variable_` + i + `_value_gp), 3)
variable_` + i + `_std_gp = round(np.std(variable_` + i + `_value_gp), 3)
whole_experiment_gp += variable_` + i + `_value_gp

variable_` + i + `_value_sp = ` + JSON.stringify(spScoreObject.value[i-1].value) + `
variable_` + i + `_participantsid_sp = ` + JSON.stringify(spScoreObject.value[i-1].participants) + `
variable_` + i + `_mean_sp = round(np.mean(variable_` + i + `_value_sp), 3)
variable_` + i + `_std_sp = round(np.std(variable_` + i + `_value_sp), 3)
whole_experiment_sp += variable_` + i + `_value_sp

variable_` + i + `_value_inv = ` + JSON.stringify(invScoreObject.value[i-1].value) + `
variable_` + i + `_participantsid_inv = ` + JSON.stringify(invScoreObject.value[i-1].participants) + `
variable_` + i + `_mean_inv = round(np.mean(variable_` + i + `_value_inv), 3)
variable_` + i + `_std_inv = round(np.std(variable_` + i + `_value_inv), 3)
whole_experiment_inv += variable_` + i + `_value_inv

variable_` + i + `_value_real = ` + JSON.stringify(realScoreObject.value[i-1].value) + `
variable_` + i + `_participantsid_real = ` + JSON.stringify(realScoreObject.value[i-1].participants) + `
variable_` + i + `_mean_real = round(np.mean(variable_` + i + `_value_real), 3)
variable_` + i + `_std_real = round(np.std(variable_` + i + `_value_real), 3)
whole_experiment_real += variable_` + i + `_value_real

print(variable_` + i + `_name + " ( M = " + str(variable_` + i + `_mean_overall) + ", SD = " + str(variable_` + i + `_std_overall) + ")")

## calculate percentiles
percentile_variable_` + i + `_overall = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_overall))
percentile_variable_` + i + `_sp = stats.percentileofscore(standard_sp_each_item, np.average(variable_` + i + `_value_sp))
percentile_variable_` + i + `_inv = stats.percentileofscore(standard_inv_each_item, np.average(variable_` + i + `_value_inv))
percentile_variable_` + i + `_real = stats.percentileofscore(standard_real_each_item, np.average(variable_` + i + `_value_real))
percentile_variable_` + i + `_gp = stats.percentileofscore(standard_gp_each_item, np.average(variable_` + i + `_value_gp))

print("Percentiles for condition: " + variable_` + i + `_name)
print("Overall score percentile: " + str(percentile_variable_` + i + `_overall))
print("SP score percentile: " + str(percentile_variable_` + i + `_sp))
print("INV score percentile: " + str(percentile_variable_` + i + `_inv))
print("REAL score percentile: " + str(percentile_variable_` + i + `_real))
print("GP score percentile: " + str(percentile_variable_` + i + `_gp))


analysis_code.innerHTML += '<p class="comment code"> # calculate percentiles for ' + variable_` + i + `_name + '</p>'

analysis_code.innerHTML += '<p class="code"> percentile_variable_` + i + `_overall = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_overall))</p>'  
analysis_code.innerHTML += '<p class="code"> print("Overall score percentile: " + str(percentile_variable_` + i + `_overall))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_variable_` + i + `_overall) + '</p><br>'  

analysis_code.innerHTML += '<p class="code"> percentile_variable_` + i + `_sp = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_sp))</p>'  
analysis_code.innerHTML += '<p class="code"> print("SP score percentile: " + str(percentile_variable_` + i + `_sp))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_variable_` + i + `_sp) + '</p><br>'    

analysis_code.innerHTML += '<p class="code"> percentile_variable_` + i + `_inv = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_inv))</p>'  
analysis_code.innerHTML += '<p class="code"> print("INV score percentile: " + str(percentile_variable_` + i + `_inv))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_variable_` + i + `_inv) + '</p><br>'    

analysis_code.innerHTML += '<p class="code"> percentile_variable_` + i + `_real = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_real))</p>'  
analysis_code.innerHTML += '<p class="code"> print("REAL score percentile: " + str(percentile_variable_` + i + `_real))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_variable_` + i + `_real) + '</p><br>'   

analysis_code.innerHTML += '<p class="code"> percentile_variable_` + i + `_gp = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_gp))</p>'  
analysis_code.innerHTML += '<p class="code"> print("GP score percentile: " + str(percentile_variable_` + i + `_gp))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_variable_` + i + `_gp) + '</p><br>'    


analysis_code.innerHTML += '<p class="code comment">  ## init variable ` + i + `<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_name = "' + variable_` + i + `_name + '"<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value_overall = ' + str(variable_` + i + `_value_overall) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid_overall = ' + str(variable_` + i + `_participantsid_overall) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean_overall = ' + str(round(np.mean(variable_` + i + `_value_overall), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std_overall = ' + str(round(np.std(variable_` + i + `_value_overall), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> whole_experiment_overall += variable_` + i + `_value_overall<p><br/>'

analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value_gp = ' + str(variable_` + i + `_value_gp) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid_gp = ' + str(variable_` + i + `_participantsid_gp) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean_gp = ' + str(round(np.mean(variable_` + i + `_value_gp), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std_gp = ' + str(round(np.std(variable_` + i + `_value_gp), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> whole_experiment_gp += variable_` + i + `_value_gp<p><br/>'

analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value_sp = ' + str(variable_` + i + `_value_sp) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid_sp = ' + str(variable_` + i + `_participantsid_sp) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean_sp = ' + str(round(np.mean(variable_` + i + `_value_sp), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std_sp = ' + str(round(np.std(variable_` + i + `_value_sp), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> whole_experiment_sp += variable_` + i + `_value_sp<p><br/>'

analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value_inv = ' + str(variable_` + i + `_value_inv) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid_inv = ' + str(variable_` + i + `_participantsid_inv) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean_inv = ' + str(round(np.mean(variable_` + i + `_value_inv), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std_inv = ' + str(round(np.std(variable_` + i + `_value_inv), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> whole_experiment_inv += variable_` + i + `_value_inv<p><br/>'

analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value_real = ' + str(variable_` + i + `_value_real) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid_real = ' + str(variable_` + i + `_participantsid_real) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean_real = ' + str(round(np.mean(variable_` + i + `_value_real), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std_real = ' + str(round(np.std(variable_` + i + `_value_real), 3)) + '<p>'
analysis_code.innerHTML += '<p class="code"> whole_experiment_real += variable_` + i + `_value_real<p><br/>'
`;
        }

        code += `
## whole experiment: calculate percentiles
percentile_whole_experiment_overall = stats.percentileofscore(standard_total_each_item, np.average(whole_experiment_overall))
percentile_whole_experiment_sp = stats.percentileofscore(standard_sp_each_item, np.average(whole_experiment_sp))
percentile_whole_experiment_inv = stats.percentileofscore(standard_inv_each_item, np.average(whole_experiment_inv))
percentile_whole_experiment_real = stats.percentileofscore(standard_real_each_item, np.average(whole_experiment_real))
percentile_whole_experiment_gp = stats.percentileofscore(standard_gp_each_item, np.average(whole_experiment_gp))

print("Percentiles for the whole experiment:")
print("Overall score percentile: " + str(percentile_whole_experiment_overall))
print(str("SP score percentile: " + str(percentile_whole_experiment_sp)))
print("INV score percentile: " + str(percentile_whole_experiment_inv))
print("REAL score percentile: " + str(percentile_whole_experiment_real))
print("GP score percentile: " + str(percentile_whole_experiment_gp))


analysis_code.innerHTML += '<p class="comment code"> # calculate percentiles for the whole experiment</p>'

analysis_code.innerHTML += '<p class="code"> percentile_whole_experiment_overall = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_overall))</p>'  
analysis_code.innerHTML += '<p class="code"> print("Overall score percentile: " + str(percentile_whole_experiment_overall))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_whole_experiment_overall) + '</p><br>'  

analysis_code.innerHTML += '<p class="code"> percentile_whole_experiment_sp = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_sp))</p>'  
analysis_code.innerHTML += '<p class="code"> print("SP score percentile: " + str(percentile_whole_experiment_sp))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_whole_experiment_sp) + '</p><br>'    

analysis_code.innerHTML += '<p class="code"> percentile_whole_experiment_inv = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_inv))</p>'  
analysis_code.innerHTML += '<p class="code"> print("INV score percentile: " + str(percentile_whole_experiment_inv))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_whole_experiment_inv) + '</p><br>'    

analysis_code.innerHTML += '<p class="code"> percentile_whole_experiment_real = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_real))</p>'  
analysis_code.innerHTML += '<p class="code"> print("REAL score percentile: " + str(percentile_whole_experiment_real))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_whole_experiment_real) + '</p><br>'   

analysis_code.innerHTML += '<p class="code"> percentile_whole_experiment_gp = stats.percentileofscore(standard_total_each_item, np.average(variable_` + i + `_value_gp))</p>'  
analysis_code.innerHTML += '<p class="code"> print("GP score percentile: " + str(percentile_whole_experiment_gp))</p>'  
analysis_code.innerHTML += '<p class="code" style="background-color: white;"> &nbsp;' + str(percentile_whole_experiment_gp) + '</p><br>'  
        
        `;

        code += `
## draw boxplot function
def draw_boxplot(data, edge_color, fill_color, position = [0]):
    bp = ax.boxplot(data, widths = 0.35, patch_artist=True, showmeans=True, positions=position)

    for element in ['boxes', 'whiskers', 'fliers', 'means', 'medians', 'caps']:
        plt.setp(bp[element], color=edge_color)

    for patch in bp['boxes']:
        patch.set(facecolor=fill_color)      
    return bp

## prepare data to plot
conditions_values = []
conditions_values.append([whole_experiment_overall, whole_experiment_gp, whole_experiment_sp, whole_experiment_inv, whole_experiment_real])

## init boxplot x-axis groups
bp_xgroups = ["Whole Experiment"]

`;
        if(number_of_experimental_conditions > 1)
        {
            for(var i = 1; i <= number_of_experimental_conditions; i++)
            {
                code += `
bp_xgroups.append(variable_` + i + `_name)
conditions_values.append([variable_` + i + `_value_overall, variable_` + i + `_value_gp, variable_` + i + `_value_sp, variable_` + i + `_value_inv, variable_` + i + `_value_real])
`;
            }
        }

        code += `
print(conditions_values)
bp_colors = ["#D2B4DE", "#A9CCE3", "#A3E4D7", "#F9E79F", "#F5CBA7"]
bp_xlabels = ["Overall", "General Presence", "Spatial Presence", "Involvement", "Experience Realism"]

left = 0.25
bottom = 0.25
right = 0.75
top = 0.75

width = 11.811
height = 3.93701

print("left: ", left)
print("right: ", right)
print("top: ", top)
print("bottom: ", bottom)

fig, ax = plt.subplots(figsize=(width, height))
plt.subplots_adjust(left=left, bottom=bottom, right=right, top=top, wspace=0.5)

ax.set_xlabel('Igroup Presence Questionnaire', fontsize=12)
ax.set_ylabel('score rating scale', fontsize=12)

def generate_positions(init_pos, ngroups):
    bp_positions = []
    for i in range(0, len(bp_xlabels)):
        bp_positions.append(i * (ngroups + 1) + init_pos)
    
    return bp_positions

boxplots = []
legends = []

for i in range(0, len(bp_xgroups)):
    print(conditions_values[i])
    positions = generate_positions(i+1, len(bp_xgroups))
    print("positions: ", positions)
    bp = draw_boxplot(conditions_values[i], "black", bp_colors[i], positions)
    boxplots.append(bp)
    legends.append(bp["boxes"][0])
    print("legends: ", legends)

ax.legend(legends, bp_xgroups, loc='upper right')

x_ticks = [0]

for i in range(0, len(bp_xlabels)):
    x = 0
    for j in range(0, len(bp_xgroups)):
        x = x + (len(bp_xgroups) + 1) * i + 1 + j
    x = x / len(bp_xgroups)
    x_ticks.append(x)

print(x_ticks)

bp_xlabels = [""] + bp_xlabels
ax.set_xticks(x_ticks)
ax.set_xticklabels(bp_xlabels)
ax.set_ylim(-3, 3)

plt.tight_layout()
plt.show()

def export_figure_to_base64(fig):
    png = io.BytesIO()
    fig.savefig(png, format='png', bbox_inches='tight')
    png.seek(0)

    return base64.b64encode(png.getvalue())

exported_fig = export_figure_to_base64(fig)

html = '<img src="data:image/png;base64, {}">'.format(exported_fig.decode('utf-8'))
html = '<br>' + html + '<br>'

analysis_code.innerHTML += html

whole_analysis_report_text = ""
`;
        
        for(var j = 0; j < 5; j++)
        {
            if(j === 0)
            {
            code += `
current_scale = "overall"

## analyse overall score data
analysis_code.innerHTML += '<p class="code comment">  ## analyse overall score data<p>'
`;
            }
            else if(j === 1)
            {
                code += `
current_scale = "general_presence"
                
## analyse general presence score data
analysis_code.innerHTML += '<p class="code comment">  ## analyse general presence score data<p>'
`;
            }
            else if(j === 2)
            {
                code += `
current_scale = "spatial_presence"
                
## analyse spatial presence score data
analysis_code.innerHTML += '<p class="code comment">  ## analyse spatial presence score data<p>'
`;
            }
            else if(j === 3)
            {
                code += `
current_scale = "involvement"
                
## analyse involvement score data
analysis_code.innerHTML += '<p class="code comment">  ## analyse involvement score data<p>'
`;
            }
            else
            {
                code += `
current_scale = "experience_realism"
                
## analyse experience realism score data
analysis_code.innerHTML += '<p class="code comment">  ## analyse experience realism score data<p>'
`;
            }
                     
            for(var i = 1; i <= number_of_experimental_conditions; i++)
            {
                if(j === 0)
                {
                    code += `
variable_` + i + `_value = variable_` + i + `_value_overall
variable_` + i + `_participantsid = variable_` + i + `_participantsid_overall   
variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_overall), 3)
variable_` + i + `_std = round(np.std(variable_` + i + `_value_overall), 3)    

analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value = variable_` + i + `_value_overall<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid = variable_` + i + `_participantsid_overall<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_overall), 3)<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std = round(np.std(variable_` + i + `_value_overall), 3)<p>'
`;
                }
                else if(j === 1)
                {
                    code += `
variable_` + i + `_value = variable_` + i + `_value_gp
variable_` + i + `_participantsid = variable_` + i + `_participantsid_gp     
variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_gp), 3)
variable_` + i + `_std = round(np.std(variable_` + i + `_value_gp), 3)      

analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value = variable_` + i + `_value_gp<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid = variable_` + i + `_participantsid_gp<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_gp), 3)<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std = round(np.std(variable_` + i + `_value_gp), 3)<p>'
`;
                }
                else if(j === 2)
                {
                    code += `
variable_` + i + `_value = variable_` + i + `_value_sp
variable_` + i + `_participantsid = variable_` + i + `_participantsid_sp   
variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_sp), 3)
variable_` + i + `_std = round(np.std(variable_` + i + `_value_sp), 3)   

analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value = variable_` + i + `_value_sp<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid = variable_` + i + `_participantsid_sp<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_sp), 3)<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std = round(np.std(variable_` + i + `_value_sp), 3)<p>' 
`;
                }
                else if(j === 3)
                {
                    code += `
variable_` + i + `_value = variable_` + i + `_value_inv
variable_` + i + `_participantsid = variable_` + i + `_participantsid_inv  
variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_inv), 3)
variable_` + i + `_std = round(np.std(variable_` + i + `_value_inv), 3)       

analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value = variable_` + i + `_value_inv<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid = variable_` + i + `_participantsid_inv<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_inv), 3)<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std = round(np.std(variable_` + i + `_value_inv), 3)<p>'  
`;
                }
                else
                {
                    code += `
variable_` + i + `_value = variable_` + i + `_value_real
variable_` + i + `_participantsid = variable_` + i + `_participantsid_real  
variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_real), 3)
variable_` + i + `_std = round(np.std(variable_` + i + `_value_real), 3)    

analysis_code.innerHTML += '<p class="code"> variable_` + i + `_value = variable_` + i + `_value_real<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_participantsid = variable_` + i + `_participantsid_real<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_mean = round(np.mean(variable_` + i + `_value_real), 3)<p>'
analysis_code.innerHTML += '<p class="code"> variable_` + i + `_std = round(np.std(variable_` + i + `_value_real), 3)<p>'    
`;
                }
            }

            if(number_of_experimental_conditions == 1)
            {
                code += `
all_value = variable_1_value  
all_value_mean = round(np.mean(all_value), 3)   
all_value_std = round(np.std(all_value), 3)

print("all_value_mean = ", all_value_mean)
print("all_value_std = ", all_value_std)

analysis_code.innerHTML += '<p class="code"> all_value = variable_1_value<p>'   
analysis_code.innerHTML += '<p class="code"> all_value_mean = np.mean(all_value)<p>'   
analysis_code.innerHTML += '<p class="code"> all_value_std = np.std(all_value)<p>'                  

html = ""
html = '<br>' + html + '<br>'
html += '<div class="box analysis-report">'

if current_scale == "general_presence":
    string = "The average score for general presence sub-scale was " + str(all_value_mean) + " (SD = " + str(all_value_std) + "), while "
    print(string)

    whole_analysis_report_text += string
    html += string
elif current_scale == "spatial_presence":
    string = " that score for spatial presence sub-scale was " + str(all_value_mean) + " (SD = " + str(all_value_std) + "). "
    print(string)
    
    whole_analysis_report_text += string
    html += string
elif current_scale == "involvement":
    string = "For the involvement sub-scale, the mean score rated by users was " + str(all_value_mean) + " (SD = " + str(all_value_std) + "). "
    print(string)
    
    whole_analysis_report_text += string
    html += string

elif current_scale == "experience_realism":
    string = "Finally, " + str(all_value_mean) + " and " + str(all_value_std) + " were mean and standard deviation rating score for experience realism sub-scale. "
    print(string)
    
    whole_analysis_report_text += string
    html += string
else:
    string = "In this experiment, users overally rated their score on the level of presence they felt in the environment around " + str(all_value_mean) + " (SD = " + str(all_value_std) + "). "
    print(string)

    whole_analysis_report_text += string
    html += string


html += "</div>"
analysis_code.innerHTML += html

`;

            }
            else if(number_of_experimental_conditions == 2)
            {              
                code += `

all_value = variable_1_value + variable_2_value
analysis_code.innerHTML += '<p class="code"> all_value = variable_1_value + variable_2_value<p>'

## normal distribution test
analysis_code.innerHTML += '<p class="code comment">  ## normal distribution test<p>'

conditions_values = []
conditions_values.append(variable_1_value)
conditions_values.append(variable_2_value)

analysis_code.innerHTML += '<p class="code"> conditions_values = []<p>'
analysis_code.innerHTML += '<p class="code"> conditions_values.append(variable_1_value)<p>'
analysis_code.innerHTML += '<p class="code"> conditions_values.append(variable_2_value)<p>'

for x in conditions_values:
    k2, p = stats.normaltest(x)
    if p < alpha:     
        is_normal_distribution = False
        break

analysis_code.innerHTML += '<br><p class="code">for x in conditions_values:<p>'
analysis_code.innerHTML += '<p class="code"> &nbsp;k2, p = stats.normaltest(all_value)<p>'
analysis_code.innerHTML += '<p class="code"> &nbsp;if p < alpha:<p>'
analysis_code.innerHTML += '<p class="code"> &nbsp; &nbsp;is_normal_distribution = False<p>'
analysis_code.innerHTML += '<p class="code"> &nbsp; &nbsp;break<p>'

if is_normal_distribution == True:
    ## if data has normal distribution
    analysis_code.innerHTML += '<br><p class="code comment">## if data has normal distribution<p>'
    analysis_code.innerHTML += '<p class="code"> if is_normal_distribution == True:<p>'

    df = pd.DataFrame({'condition': variable_1_name, 'value': variable_1_value, 'participantid': variable_1_participantsid})
    d2 = pd.DataFrame({'condition': variable_2_name, 'value': variable_2_value, 'participantid': variable_2_participantsid})
    df = df.append(d2, ignore_index=True)
    
    analysis_code.innerHTML += '<p class="code"> &nbsp;df = pd.DataFrame({"condition": variable_1_name, "value": variable_1_value, "participantid": variable_1_participantsid})<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;d2 = pd.DataFrame({"condition": variable_2_name, "value": variable_2_value, "participantid": variable_2_participantsid})<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;df = df.append(d2, ignore_index=True)<p>'`

                if(experiment_design === "between-subject")
                {
                    code += `
    document.getElementById("between_subject_anova").setAttribute("style", "background-color: #F5B041;")

    ## conduct one-way anova
    anova_model = ols('value ~ condition', data=df).fit()
    anova_ret = sm.anova_lm(anova_model, typ=2)

    analysis_code.innerHTML += '<br><p class="code comment">> &nbsp;## conduct one-way anova<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;anova_model = ols("value ~ condition", data=df).fit()<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;anova_ret = sm.anova_lm(anova_model, typ=2)<p>'

    ## calculate Eta-Squared from Sum Squared
    eta_squared = anova_ret['sum_sq'][0] / (anova_ret['sum_sq'][0] + anova_ret['sum_sq'][1])
    anova_ret['Eta-Squared'] = [eta_squared, 'NaN']
    print(anova_ret)    

    analysis_code.innerHTML += '<br><p class="code comment">> &nbsp;## calculate Eta-Squared from Sum Squared<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;eta_squared = anova_ret["sum_sq"][0] / (anova_ret["sum_sq"][0] + anova_ret["sum_sq"][1])<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;anova_ret["Eta-Squared"] = [eta_squared, "NaN"]<p>'    
    analysis_code.innerHTML += '<p class="code"> &nbsp;print(anova_ret)<p>'    
    
    html = str(anova_ret.to_html()).replace('class="dataframe"', 'class="table is-hoverable" style="font-size: 12px;"')
    html = '<br>' + html + '<br>'
    html += '<div class="box analysis-report">'

    
# if current_scale = "general_presence":
# elif current_scale = "spatial_presence":
# elif current_scale = "involvement":
# elif current_scale = "experience_realism":
# else:

    if current_scale == "general_presence":
        if anova_ret['PR(>F)'][0] < alpha:
            string = "The scores for general presence sub-scale analysed with one-way ANOVA showed that the difference in the level of presence between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + ") was significant. "
            print(string)

            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "For this subscale, condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "For this subscale, condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "The scores for general presence sub-scale analysed with one-way ANOVA showed that the difference in the level of presence between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + ") was not significant. "
            string += "For this subscale, the average scores for condition " + variable_1_name + " and condition " + variable_2_name + " are " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "), respectively. "
            print(string)

            whole_analysis_report_text += string
            html += string
    elif current_scale == "spatial_presence":
        if anova_ret['PR(>F)'][0] < alpha:
            string = "According to an test with one-way ANOVA, the scores of spatial presence was significant difference between" + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + "). "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "The result of this analysis showed that the rating scores for condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") was significantly higher than condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "The result of this analysis showed that the rating scores for condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") was significantly higher than condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "According to an test with one-way ANOVA, the scores of spatial presence was not significant difference between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + ") "
            string += "The average score of spatial presence for condition " + variable_1_name + " was  at " + str(variable_1_mean) + " (SD = " + str(variable_1_std) +  " and for condition " + variable_2_name + " was " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
            print(string)

            whole_analysis_report_text += string
            html += string
    elif current_scale == "involvement":
        if anova_ret['PR(>F)'][0] < alpha:
            string = "The analysis for involvement sub-scale scores with one-way ANOVA procedure showed that the scores between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + ") was significantly different. "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "It is observed that users had rated higher scores for involvement sub-scale for condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") than for " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "It is observed that users had rated higher scores for involvement sub-scale for condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") than for " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "The analysis for involvement sub-scale scores with one-way ANOVA procedure showed no significant difference between conditions " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + "). "
            string += "The average scores for this sub-scale for condition " + variable_1_name + " and condition " + variable_2_name + " are " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "), respectively. "
            print(string)

            whole_analysis_report_text += string
            html += string
    elif current_scale == "experience_realism":
        if anova_ret['PR(>F)'][0] < alpha:
            string = "Finally, the rating scores for experienced realism was analysed with an one-way ANOVA procedure. The results showed that there was a significant difference in rating scores for this sub-scale between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + "). "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "Condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "Condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "Finally, the rating scores for experienced realism was analysed with an one-way ANOVA procedure. The results showed that there was no significant difference in rating scores for this sub-scale between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + "). "
            string += "The mean rating score of this sub-scale for condition " + variable_1_name + " is " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + variable_2_name + " had the average score at " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
            print(string)

            whole_analysis_report_text += string
            html += string
    else:
        if anova_ret['PR(>F)'][0] < alpha:
            string = "One-way ANOVA analysis for the overall scores could not show significant differences in the level of presence provided by " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + "). "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "Condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)
        
                whole_analysis_report_text += string
                html += string
            else:
                string = "Condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "One-way ANOVA analysis for the overall scores could not show significant differences in the level of presence provided by " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(round(anova_ret['df'][0])) + ", " + str(round(anova_ret['df'][1])) + "</sub> = " + str(round(anova_ret['F'][0], 3)) + ", p = " + str(round(p, 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_ret['Eta-Squared'][0], 3)) + "). "
            string += "The average overall presence scores for condition " + variable_1_name + " was " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and for condition " + variable_2_name + " was " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
            print(string)
    
            whole_analysis_report_text += string
            html += string
    
    
    html += "</div>";
    analysis_code.innerHTML += html

if is_normal_distribution == False:
    ## if data has non normal distribution
    analysis_code.innerHTML += '<br><p class="code comment">## if data has non normal distribution<p>'
    analysis_code.innerHTML += '<p class="code"> if is_normal_distribution == False:<p>'

    document.getElementById("mann_whitneyu").setAttribute("style", "background-color: #F5B041;")

    ## Mann-Whitney U rank test is conducted for between-subject experiment
    ## with non-normal distribution data
    u, p = stats.mannwhitneyu(variable_1_value, variable_2_value)

    analysis_code.innerHTML += '<p class="code"> &nbsp;## Mann-Whitney U rank test was conducted for between-subject experiment<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;## with non-normal distribution data<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;u, p = stats.mannwhitneyu(variable_1_value, variable_2_value)<p><br/>'

    ## calculate z and r values
    m_u = len(variable_1_value) * len(variable_2_value) / 2
    sigma_u = np.sqrt(len(variable_1_value) * len(variable_2_value) * (len(variable_1_value) + len(variable_2_value) + 1) / 12)
    z = (u - m_u) / sigma_u
    r = z / np.sqrt(len(variable_1_value) + len(variable_2_value)) 

    analysis_code.innerHTML += '<p class="code comment">  &nbsp;## calculate z and r values<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;m_u = len(variable_1_value) * len(variable_2_value) / 2<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;sigma_u = np.sqrt(len(variable_1_value) * len(variable_2_value) * (len(variable_1_value) + len(variable_2_value) + 1) / 12)<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;z = (u - m_u) / sigma_u<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;r = z / np.sqrt(len(variable_1_value) + len(variable_2_value))<p><br/>'   

    print("u: ", u)
    print("p: ", p)
    print("z: ", z)
    print("r: ", r)

    u = round(u, 3)
    z = round(z, 3)
    p = round(p, 3)
    r = round(r, 3)

    html = '<br><br>'
    html += '<div class="box analysis-report">'

    if current_scale == "general_presence":
        if p < alpha:
            string = "The scores for general presence sub-scale analysed with a Mann-Whitney U test showed that the difference in the level of presence between " + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + ") was significant. "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "For this subscale, condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "For this subscale, condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "The scores for general presence sub-scale analysed with a Mann-Whitney U test showed that the difference in the level of presence between " + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + ") was not significant. "
            string += "For this subscale, the average scores for condition " + variable_1_name + " and condition " + variable_2_name + " are " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "), respectively. "
            print(string)

            whole_analysis_report_text += string
            html += string
    elif current_scale == "spatial_presence":
        if p < alpha:
            string = "According to a Mann-Whitney U test, the scores for spatial presence reveal significant differences between" + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "The result of this analysis showed that the rating scores for condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") was significantly higher than condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "The result of this analysis showed that the rating scores for condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") was significantly higher than condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "According to a Mann-Whitney U test, the scores for spatial presence did not reveal significant differences between " + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            string += "The average score of spatial presence for condition " + variable_1_name + " was  at " + str(variable_1_mean) + " (SD = " + str(variable_1_std) +  ") and for condition " + variable_2_name + " was " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
            print(string)

            whole_analysis_report_text += string
            html += string
    elif current_scale == "involvement":
        if p < alpha:
            string = "The analysis for involvement sub-scale scores with a Mann-Whitney U test showed that the scores between " + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + ") was significantly different. "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "It was observed that users had rated higher scores for involvement sub-scale for condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") than for " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "It was observed that users had rated higher scores for involvement sub-scale for condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") than for " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "The analysis for involvement sub-scale scores with a Mann-Whitney U test showed no significant difference between conditions " + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            string += "The average of these scores for condition " + variable_1_name + " and condition " + variable_2_name + " are " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "), respectively. "
            print(string)

            whole_analysis_report_text += string
            html += string
    elif current_scale == "experience_realism":
        if p < alpha:
            string = "Finally, the rating scores for experienced realism was analysed with a Mann-Whitney U test. The results showed that there was a significant difference in rating scores for this sub-scale between " + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "Condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "Condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "Finally, the rating scores for experienced realism was analysed with a Mann-Whitney U test. The results showed that there was no significant difference in rating scores for this sub-scale between " + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            string += "The mean rating score of this sub-scale for condition " + variable_1_name + " was " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + variable_2_name + " had the average score at " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
            print(string)

            whole_analysis_report_text += string
            html += string
    else:
        if p < alpha:            
            string = "Mann-Whitney U test showed that there was significant difference in the level of presence provided by " + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "Condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)
        
                whole_analysis_report_text += string
                html += string
            else:
                string = "Condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "Mann-Whitney U test showed that there was no significant difference in the level of presence provided by " + variable_1_name + " and " + variable_2_name + " (U = " + str(u) + ", Z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            string += "The average overall presence scores for condition " + variable_1_name + " was " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and for condition " + variable_2_name + " was " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
            print(string)
    
            whole_analysis_report_text += string
            html += string
    
    html += "</div>";
    analysis_code.innerHTML += html`;
                }
                else if(experiment_design === "within-subject")
                {
                    code += `
    document.getElementById("within_subject_anova").setAttribute("style", "background-color: #F5B041;")
    
    ## calculate eta-squared
    n = len(all_value)
    grand_mean = 0;
    for x in all_value:
        grand_mean += x

    grand_mean = grand_mean / n

    print("grand_mean = ", grand_mean)

    s2_grand = 0

    for x in all_value:
        s2_grand += (x - grand_mean)**2
    
    s2_grand = s2_grand / (n - 1)

    print("s2_grand = ", s2_grand)

    SSt = s2_grand * (n - 1)

    print("SSt = " + str(SSt))

    SSw = 0

    for x in range(1, 3):
        value = [];
        if x == 1:
            value = variable_1_value
        else:
            value = variable_2_value
      
        tmp_n = len(value)
        tmp_grand_mean = 0

        for i in value:
            tmp_grand_mean += i
      
        tmp_grand_mean = tmp_grand_mean / tmp_n

        tmp_s2_grand = 0
        for i in value:
            tmp_s2_grand += (i - tmp_grand_mean)**2
      
        tmp_s2_grand = tmp_s2_grand / (tmp_n - 1)

        SSw += tmp_s2_grand * (tmp_n - 1)

    print("SSw = " + str(SSw))

    data_by_participants = pd.DataFrame(columns=['count', 'total', 'participantid', 'grand_mean'])
    
    print("length ", len(df['participantid']))

    print(df)

    for i in range(0, len(df['participantid'])):
        isExisted = False

        if len(data_by_participants['participantid']) > 0:
            for j in range(0, len(data_by_participants['participantid'])):
                if df.iloc[i, :]['participantid'] == data_by_participants.iloc[j, :]['participantid']:
                    isExisted = True
                    data_by_participants.at[j, 'count']= data_by_participants.at[j, 'count'] + 1
                    data_by_participants.at[j, 'total'] = data_by_participants.at[j, 'total'] + df.at[i, 'value']
                    break
      
        if isExisted == False:
            value = df.iloc[i, :]['value']
            id = df.iloc[i, :]['participantid']
            count = 1
            tmp_df = pd.DataFrame({'count': [count], 'total': [value], 'participantid': [id], 'grand_mean': [0]})
            data_by_participants = data_by_participants.append(tmp_df,ignore_index=True)

    isBalanced = True

    for i in range(0, len(data_by_participants['participantid']) - 1):
        if data_by_participants.at[i, 'count'] != data_by_participants.at[i + 1, 'count']:
            isBalanced = False
            data_by_participants.at[i, 'grand_mean'] = data_by_participants.at[i, 'total'] / data_by_participants.at[i, 'count']
            break
    
    if isBalanced == True:
        print("Data for each participant is balanced!")
        
        SSsubjects = 0;

        for i in range(0, len(data_by_participants['participantid']) ):
            data_by_participants.at[i, 'grand_mean'] = data_by_participants.at[i, 'total'] / data_by_participants.at[i, 'count']
            SSsubjects = SSsubjects + data_by_participants.at[i, 'count'] * (data_by_participants.at[i, 'grand_mean'] - grand_mean)**2

        print("Data by participants: ", data_by_participants)
        print("SSsubjects: ", SSsubjects)

        SSerror = SSw - SSsubjects        
        print("SSerror: ", SSerror)

        SStime = SSt - SSw
        print("SStime: ", SStime)

        MStime = SStime / (2 - 1)
        print("MStime: ", MStime)

        MSerror = SSerror / ((n - 1) * (2 - 1))
        print("MSerror: ", MSerror)

        F = MStime / MSerror
        print("F: ", F)

        ## conduct one-way anova repeated measure
        anova_rep = AnovaRM(df, 'value', 'participantid', within=['condition'], aggregate_func='mean').fit()
        print(anova_rep) 

        eta_squared_partial = SStime / (SStime + SSerror)
        print("eta_squared_partial: ", eta_squared_partial)

        eta_squared = SStime / SSt
        print("eta_squared: ", eta_squared)

        anova_table = anova_rep.anova_table
        anova_table['Eta-Squared'] = [eta_squared]

        analysis_code.innerHTML += '<p class="code comment">  &nbsp;## conduct one-way anova repeated measure<p>'
        analysis_code.innerHTML += '<p class="code"> &nbsp;anova_rep = AnovaRM(df, "value", "participantid", within=["condition"], aggregate_func="mean").fit()<p>'
        analysis_code.innerHTML += '<p class="code"> &nbsp;print(anova_rep.anova_table)<p>'

        html = str(anova_table.to_html()).replace('class="dataframe"', 'class="table is-hoverable" style="font-size: 12px;"')
        html = '<br>' + html + '<br>'
        html += '<div class="box analysis-report">'

        if current_scale == "general_presence":
            if anova_table['Pr > F'][0] < alpha:
                string = "The scores for general presence sub-scale analysed with one-way repeated-measures ANOVA showed that the difference in the level of presence between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + ") was significant. "
                print(string)

                whole_analysis_report_text += string
                html += string

                if variable_1_mean > variable_2_mean:
                    string = "For this subscale, condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                    print(string)

                    whole_analysis_report_text += string
                    html += string
                else:
                    string = "For this subscale, condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                    print(string)

                    whole_analysis_report_text += string
                    html += string
            else:
                string = "The scores for general presence sub-scale analysed with one-way repeated-measures ANOVA showed that the difference in the level of presence between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + ") was not significant. "
                string += "For this subscale, the average scores for condition " + variable_1_name + " and condition " + variable_2_name + " are " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "), respectively. "
                print(string)

                whole_analysis_report_text += string
                html += string
        elif current_scale == "spatial_presence":
            if anova_table['Pr > F'][0] < alpha:
                string = "According to an test with one-way repeated-measures ANOVA, the scores of spatial presence was significant difference between" + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + "). "
                print(string)
                
                whole_analysis_report_text += string
                html += string

                if variable_1_mean > variable_2_mean:
                    string = "The result of this analysis showed that the rating scores for condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") was significantly higher than condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                    print(string)

                    whole_analysis_report_text += string
                    html += string
                else:
                    string = "The result of this analysis showed that the rating scores for condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") was significantly higher than condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                    print(string)

                    whole_analysis_report_text += string
                    html += string
            else:
                string = "According to an test with one-way repeated-measures ANOVA, the scores of spatial presence was not significant difference between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + ") "
                string += "The average score of spatial presence for condition " + variable_1_name + " was  at " + str(variable_1_mean) + " (SD = " + str(variable_1_std) +  " and for condition " + variable_2_name + " was " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        elif current_scale == "involvement":
            if anova_table['Pr > F'][0] < alpha:
                string = "The analysis for involvement sub-scale scores with one-way repeated-measures ANOVA procedure showed that the scores between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + ") was significantly different. "
                print(string)
                
                whole_analysis_report_text += string
                html += string

                if variable_1_mean > variable_2_mean:
                    string = "It is observed that users had rated higher scores for involvement sub-scale for condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") than for " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                    print(string)

                    whole_analysis_report_text += string
                    html += string
                else:
                    string = "It is observed that users had rated higher scores for involvement sub-scale for condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") than for " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                    print(string)

                    whole_analysis_report_text += string
                    html += string
            else:
                string = "The analysis for involvement sub-scale scores with one-way repeated-measures ANOVA procedure showed no significant difference between conditions " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + "). "
                string += "The average of these scores for condition " + variable_1_name + " and condition " + variable_2_name + " are " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "), respectively. "
                print(string)

                whole_analysis_report_text += string
                html += string
        elif current_scale == "experience_realism":
            if anova_table['Pr > F'][0] < alpha:
                string = "Finally, the rating scores for experienced realism was analysed with an one-way repeated-measures ANOVA procedure. The results showed that there was a significant difference in rating scores for this sub-scale between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + "). "
                print(string)
                
                whole_analysis_report_text += string
                html += string

                if variable_1_mean > variable_2_mean:
                    string = "Condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                    print(string)

                    whole_analysis_report_text += string
                    html += string
                else:
                    string = "Condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                    print(string)

                    whole_analysis_report_text += string
                    html += string
            else:
                string = "Finally, the rating scores for experience realism was analysed with an one-way repeated-measures ANOVA procedure. The results showed that there was no significant difference in rating scores for this sub-scale between " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + "). "
                string += "The mean rating score of this sub-scale for condition " + variable_1_name + " is " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + variable_2_name + " had the average score at " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            if anova_table['Pr > F'][0] < alpha:
                string = "One-way repeated-measures ANOVA analysis for the overall scores could not show significant differences in the level of presence provided by " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + "). "
                print(string)
                
                whole_analysis_report_text += string
                html += string

                if variable_1_mean > variable_2_mean:
                    string = "Condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                    print(string)
            
                    whole_analysis_report_text += string
                    html += string
                else:
                    string = "Condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                    print(string)

                    whole_analysis_report_text += string
                    html += string
            else:
                string = "One-way repeated-measures ANOVA analysis showed that there was no significant difference in the level of presence provided by " + variable_1_name + " and " + variable_2_name + " (F<sub>" + str(anova_table['Num DF'][0]) + ", " + str(anova_table['Den DF'][00]) + "</sub> = " + str(round(anova_table['F Value'][0], 3)) + ", p = " + str(round(anova_table['Pr > F'][0], 3)) + ", &eta;<sup>2</sup> = " + str(round(anova_table['Eta-Squared'][0], 3)) + "). "
                string += "The average overall presence scores for condition " + variable_1_name + " was " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and for condition " + variable_2_name + " was " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
                print(string)
        
                whole_analysis_report_text += string
                html += string
        
        html += "</div>";
        analysis_code.innerHTML += html


    else:
        print("The number of entries are different between participants!")  
        alert("The number of entries are different between participants. The analysis is interrupted!")  

## if data has non normal distribution
if is_normal_distribution == False:
    analysis_code.innerHTML += '<br><p class="code comment">## if data has non normal distribution<p>'
    analysis_code.innerHTML += '<p class="code"> if is_normal_distribution == False:<p>'
    
    document.getElementById("wilcoxon_signed_rank").setAttribute("style", "background-color: #F5B041;")

    ## Wilcoxon Signed-Rank test is conducted for within-subject experiment
    ## with non-normal distribution data
    z, p = stats.wilcoxon(variable_1_value, variable_2_value)
    r = z / np.sqrt(len(variable_1_value) + len(variable_2_value))

    z = round(z, 3)
    p = round(p, 3)
    r = round(r, 3)

    analysis_code.innerHTML += '<p class="code"> &nbsp;## Wilcoxon Signed-Rank test is conducted for within-subject experiment<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;## with non-normal distribution data<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;z, p = stats.wilcoxon(variable_1_value, variable_2_value)<p>'
    analysis_code.innerHTML += '<p class="code"> &nbsp;r = z / np.sqrt(len(variable_1_value) + len(variable_2_value))<p>'   

    html = '<br><br>'
    html += '<div class="box analysis-report">'

    if current_scale == "general_presence":
        if p < alpha:
            string = "The scores for general presence sub-scale analysed with a Wilcoxon Signed-Rank test showed that the difference in the level of presence between " + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + ") was significant. "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "For this subscale, condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "For this subscale, condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "The scores for general presence sub-scale analysed with a Wilcoxon Signed-Rank test showed that the difference in the level of presence between " + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + ") was not significant. "
            string += "For this subscale, the average scores for condition " + variable_1_name + " and condition " + variable_2_name + " are " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "), respectively. "
            print(string)

            whole_analysis_report_text += string
            html += string
    elif current_scale == "spatial_presence":
        if p < alpha:
            string = "According to a Wilcoxon Signed-Rank test, the scores of spatial presence was significant difference between" + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "The result of this analysis showed that the rating scores for condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") was significantly higher than condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "The result of this analysis showed that the rating scores for condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") was significantly higher than condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "According to a Wilcoxon Signed-Rank test, the scores of spatial presence was not significant difference between " + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            string += "The average score of spatial presence for condition " + variable_1_name + " was  at " + str(variable_1_mean) + " (SD = " + str(variable_1_std) +  " and for condition " + variable_2_name + " was " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
            print(string)

            whole_analysis_report_text += string
            html += string
    elif current_scale == "involvement":
        if p < alpha:
            string = "The analysis for involvement sub-scale scores with a Wilcoxon Signed-Rank test showed that the scores between " + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + ") was significantly different. "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "It was observed that users had rated higher scores for involvement sub-scale for condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") than for " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "It was observed that users had rated higher scores for involvement sub-scale for condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") than for " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "The analysis for involvement sub-scale scores with a Wilcoxon Signed-Rank test showed no significant difference between conditions " + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            string += "The average scores for this sub-scales for condition " + variable_1_name + " and condition " + variable_2_name + " are " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "), respectively. "
            print(string)

            whole_analysis_report_text += string
            html += string
    elif current_scale == "experience_realism":
        if p < alpha:
            string = "Finally, the rating scores for experienced realism was analysed with a Wilcoxon Signed-Rank test. The results showed that there was a significant difference in rating scores for this sub-scale between " + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "Condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
            else:
                string = "Condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "Finally, the rating scores for experienced realism was analysed with a Wilcoxon Signed-Rank test. The results showed that there was no significant difference in rating scores for this sub-scale between " + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            string += "The mean rating score of this sub-scale for condition " + variable_1_name + " was " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and " + variable_2_name + " had the average score at " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
            print(string)

            whole_analysis_report_text += string
            html += string
    else:
        if p < alpha:            
            string = "Wilcoxon Signed-Rank test showed that there was significant difference in the level of presence provided by " + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            print(string)
            
            whole_analysis_report_text += string
            html += string

            if variable_1_mean > variable_2_mean:
                string = "Condition " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + ") had higher ratings of presence than " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + "). "
                print(string)
        
                whole_analysis_report_text += string
                html += string
            else:
                string = "Condition " + variable_2_name + " (M = " + str(variable_2_mean) + ", SD = " + str(variable_2_std) + ") had higher ratings of presence than " + variable_1_name + " (M = " + str(variable_1_mean) + ", SD = " + str(variable_1_std) + "). "
                print(string)

                whole_analysis_report_text += string
                html += string
        else:
            string = "Wilcoxon Signed-Rank test showed that there was no significant difference in the level of presence provided by " + variable_1_name + " and " + variable_2_name + " (z = " + str(z) + ", p = " + str(p) + ", r = " + str(r) + "). "
            string += "The average overall presence scores for condition " + variable_1_name + " was " + str(variable_1_mean) + " (SD = " + str(variable_1_std) + ") and for condition " + variable_2_name + " was " + str(variable_2_mean) + " (SD = " + str(variable_2_std) + "). "
            print(string)
    
            whole_analysis_report_text += string
            html += string
    
    html += "</div>";
    analysis_code.innerHTML += html
`;
                }
            }   
            
            code += `      
    
user_data_sample_report_text = document.getElementById("user_data_sample_report_text")
html = '<div class="columns"><div class="column"> </div><div class="column is-11"><div class="box" style="background: #ECF0F1;"><div class="box report-text" style="margin: 20px 20px 20px 20px; text-align:justify; margin-bottom: 20px;" id="analysis_report_text"><p>'
html += whole_analysis_report_text
html += '</p></div></div> </div> <div class="column"> </div> </div>'

user_data_sample_report_text.innerHTML = html
`;
        }

    }
    else if(number_of_experimental_conditions > 2)
    {
        alert("Current version of this tool only supports upto two experimental conditions!");
    }
        
    console.log(code);
    
    languagePluginLoader.then(() => {
        pyodide.loadPackage(['numpy', 'scipy', 'pandas', 'statsmodels', 'matplotlib']).then(() => {            
            pyodide.runPython(code);
        });
    })
}

function IllustrateUserData(data, width, height, div, user_data, condition)
{
    var json = JSON.stringify(data);
    var tmpObject = JSON.parse(json);

    var generalObject = tmpObject.value.find(function(element) {
        return element.name === "Overall";
    });

    var summaryObject = generalObject.value.find(function(element) {
        return element.name === "Summary";
    });
    
    summaryObject.number++;

    var adjectiveRatingsObject = tmpObject.value.find(function(element) {
        return element.name === "AdjectiveRatings";
    });

    adjectiveRatingsObject.value.forEach(function(e){
        if(e.name === user_data.adjective_rating)
        {
            e.number++;
            e.color = user_data_color;
        }

        e.condition = condition;

        e.percent = Math.round(e.number * 10000 / summaryObject.number) / 100;
    });

    DrawPie(adjectiveRatingsObject.value, width, height, "", div, false, user_data.average, user_data.name);     
}

function DrawPie(data, width, height, margin, div_id, is_reference, data_score = "", adjective_rating = "")
{
    $(div_id).html("");

    var radius = Math.min(width, height) / 2,
        innerRadius = 0.3 * radius;

    var circlePie = d3.layout.pie()
        .sort(null)
        .value(function(element){
            return element.percent;
    });

    var outerCircleArc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(function(element){
            return (radius - innerRadius) + innerRadius;
    });

    var outlineCircleArc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

    var mainPieSVG = d3.select(div_id).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var path = mainPieSVG.selectAll(".solidArc")
        .data(circlePie(data))
        .enter().append("path")
        .attr("fill", function(element) { return element.data.color; })
        .attr("class", "solidArc")
        .attr("stroke", "gray")
        .attr('d', outerCircleArc)              
        .on("click", function(element){
            if(element.data === currentSelectedPie)
                currentSelectedPie = undefined;
            else
            {
                currentSelectedPie = element.data;
            }

            UpdateInfo("main", element.data);

            // if(!is_reference)
            // {
            //     if(element.data.name !== selectedItem)
            //     {
            //         selectedItem = element.data.name;
            //         isClicked = true;
            //     }
            //     else
            //     {
            //         isClicked = false;
            //         selectedItem = "";
            //         //AddYearBarChart("All", "#2E86C1");
            //         //AddScoreBarChart("All", "#2E86C1");
            //         //UpdateInfo("All");
            //         //WriteTable("All");
            //     }
            // }            
        })
        .on("mouseover", function(element) {	
            SetCurrentObject(element.data);
            UpdateInfo(stage, element.data);

            // if(!is_reference)
            // {
                
            //     // AddYearBarChart(element.data); 
            //     // AddScoreBarChart(element.data);            
            //     // //UpdateInfo(element.data.name);
            //     // WriteTable(element.data);
            // }
            
        })					
        .on("mouseout", function(element) {
            // if(!is_reference && !isClicked)
            // {
            //     //AddYearBarChart("All", "#2E86C1");
            //     //AddScoreBarChart("All", "#2E86C1");
            //     //UpdateInfo("All");
            //     //WriteTable("All");
            // }		
        });

    var outerPath = mainPieSVG.selectAll(".outlineArc")
        .data(circlePie(data))
        .enter().append("path")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("class", "outlineArc")
        .attr('d', outlineCircleArc);    

    if(data_score !== "")
    {
        mainPieSVG.append("svg:text")
            .attr("class", "ipq-eachstudyscore")
            .attr("dy", "-0.05em")
            .attr("text-anchor", "middle")
            .style("font-size", (width/2) + "%") 
            .text(data_score);    

        mainPieSVG.append("svg:text")
            .attr("class", "ipq-eachstudyscore")
            .attr("dy", "1.5em")
            .attr("text-anchor", "middle")
            .style("font-size", (width/4) + "%") 
            .text(adjective_rating);       
    }
    else if(stage === "main")
    {
        var category = "";
        if(data[0].subscale === "")
            category = data[0].display;
        else 
            category = data[0].subscale;

        mainPieSVG.append("svg:text")
            .attr("class", "ipq-eachstudyscore")
            .attr("dy", "0.5em")
            .attr("text-anchor", "middle")
            .style("font-size", (width/4) + "%") 
            .text(category); 
    }
    

    if(!is_reference)
    {
        //AddYearBarChart("All", "#2E86C1");
        //AddScoreBarChart("All", "#2E86C1");
        //UpdateInfo("All");
        //WriteTable("All");
    }
}

function AddAppendix(is_user_data = false, div = "#main_appendix")
{    
    var width = 0.85 * $(div).width(); 
    var height = width;
    
    var appendixSVG = d3.select(div)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    appendixSVG.append("text").attr("x", width/2 - 30).attr("y", height - 5 * (height / 8)).text("APPENDIX").attr("alignment-baseline","middle").style("font-size", (width/2.5) + "%");
    
    // appendixSVG.append("circle").attr("cx", width/5).attr("cy", height - height / 8).attr("r", 6).style("fill", "#3092C7");
    // appendixSVG.append("circle").attr("cx", width/5 + width/3).attr("cy", height - 2 * (height / 8)).attr("r", 6).style("fill", "#3498DB");
    // appendixSVG.append("circle").attr("cx", width/5).attr("cy", height - 2 * (height / 8)).attr("r", 6).style("fill", "#5DADE2");
    // appendixSVG.append("circle").attr("cx", width/5 + width/3).attr("cy", height - 3 * (height / 8)).attr("r", 6).style("fill", "#85C1E9");
    // appendixSVG.append("circle").attr("cx", width/5).attr("cy", height - 3 * (height / 8)).attr("r", 6).style("fill", "#AED6F1");
    // appendixSVG.append("circle").attr("cx", width/5 + width/3).attr("cy", height - 4 * (height / 8)).attr("r", 6).style("fill", "#D6EAF8");
    // appendixSVG.append("circle").attr("cx", width/5).attr("cy", height - 4 * (height / 8)).attr("r", 6).style("fill", "#EBF5FB");

    appendixSVG.append("circle").attr("cx", width/5 + width/3).attr("cy", height - 2 * (height / 8)).attr("r", 6).style("fill", "#cce2fd");
    appendixSVG.append("circle").attr("cx", width/5).attr("cy", height - 2 * (height / 8)).attr("r", 6).style("fill", "#a9d7fc");
    appendixSVG.append("circle").attr("cx", width/5 + width/3).attr("cy", height - 3 * (height / 8)).attr("r", 6).style("fill", "#80cafb");
    appendixSVG.append("circle").attr("cx", width/5).attr("cy", height - 3 * (height / 8)).attr("r", 6).style("fill", "#51bbfa");
    appendixSVG.append("circle").attr("cx", width/5 + width/3).attr("cy", height - 4 * (height / 8)).attr("r", 6).style("fill", "#31b1f9");
    appendixSVG.append("circle").attr("cx", width/5).attr("cy", height - 4 * (height / 8)).attr("r", 6).style("fill", "#3092c7");

    // appendixSVG.append("text").attr("x", width/5 + 15).attr("y", height - 1 * (height / 8)).text("Best").attr("alignment-baseline","middle").style("font-size", (width/3) + "%");
    appendixSVG.append("text").attr("x", width/5 + width/3 + 15).attr("y", height - 2 * (height / 8)).text('Class VI').attr("alignment-baseline","middle").style("font-size", (width/3) + "%");
    appendixSVG.append("text").attr("x", width/5 + 15).attr("y", height - 2 * (height / 8)).text('Class V').attr("alignment-baseline","middle").style("font-size", (width/3) + "%");
    appendixSVG.append("text").attr("x", width/5 + width/3 + 15).attr("y", height - 3 * (height / 8)).text('Class IV').attr("alignment-baseline","middle").style("font-size", (width/3) + "%");
    appendixSVG.append("text").attr("x", width/5 + 15).attr("y", height - 3 * (height / 8)).text('Class III').attr("alignment-baseline","middle").style("font-size", (width/3) + "%");
    appendixSVG.append("text").attr("x", width/5 + width/3 + 15).attr("y", height - 4 * (height / 8)).text('Class II').attr("alignment-baseline","middle").style("font-size", (width/3) + "%");
    appendixSVG.append("text").attr("x", width/5 + 15).attr("y", height - 4 * (height / 8)).text('Class I').attr("alignment-baseline","middle").style("font-size", (width/3) + "%");

    if(is_user_data)
    {        
        appendixSVG.append("circle").attr("cx", width/5 + width/3).attr("cy", height - height / 8).attr("r", 6).style("fill", "#F39C12");
        appendixSVG.append("text").attr("x", width/5 + width/3 + 15).attr("y", height - 1 * (height / 8)).text("Your Data").attr("alignment-baseline","middle").style("font-size", (width/3) + "%");
    }
    
}

function SetCurrentObject(object)
{
    if(object.subscale !== "")
    {
        if(object.subscale === "Overall")
        {
            currentObject = overallObject;
        }
        else{
            currentObject = subscalesObject.value.find(function(e)
            {
                return e.name === object.subscale;
            });
        }
    }
    else{
        currentObject = visualDisplaysObject.value.find(function(e)
        {
            return e.name === object.display;
        });
    }		
}

$( document ).ready(function() {
    var copyrightText = $("#copyright").text();
    var years = "2020";

    var date = new Date();
    var year = date.getFullYear();

    if(year !== 2020)
    {
        years += " - " + year;
    }

    copyrightText = years + " " + copyrightText;

    $("#copyright").text(copyrightText);
});

languagePluginLoader.then(() => {
    pyodide.loadPackage(['numpy', 'scipy', 'pandas', 'statsmodels', 'matplotlib']).then(() => {            
        pyodide.runPython(`
import io
import base64
import numpy as np
from scipy import stats
import pandas as pd
import statsmodels.stats.api as sm
from statsmodels.stats.anova import AnovaRM
from statsmodels.regression.mixed_linear_model import MixedLM
from statsmodels.formula.api import ols
import matplotlib.pyplot as plt
from js import window, eval as jseval

print("Preload libraries are finished!")
`);
    });
})

function HideTermsandCondition(){    
    $("#terms_and_conditions").hide();
    $("#btn_terms_and_conditions").addClass("is-outlined")
}

function ShowTermsandCondition(){    
    $("#terms_and_conditions").show();
    $("#btn_terms_and_conditions").removeClass("is-outlined")
}

function ShowWhatIsIPQ(){
    $("#what_is_ipq").show();
    $("#btn_what_is_ipq").removeClass("is-outlined");
}

function HideWhatIsIPQ(){
    $("#what_is_ipq").hide();
    $("#btn_what_is_ipq").addClass("is-outlined");
}

function ShowUsageGuidelines(){
    $("#usage_guidelines").show();
    $("#btn_usage_guidelines").removeClass("is-outlined");
}

function HideUsageGuidelines(){
    $("#usage_guidelines").hide();
    $("#btn_usage_guidelines").addClass("is-outlined");
}

function ShowContribute()
{
    $("#contribute").show();
    $("#btn_contribute").removeClass("is-outlined");
}

function HideContribute()
{
    $("#contribute").hide();
    $("#btn_contribute").addClass("is-outlined");
}

$("#what_is_ipq").hide();
$("#usage_guidelines").hide();
$("#contribute").hide();


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    Scroll()
};

function Scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#goTopBtn").css("display","block");
  } else {
    $("#goTopBtn").css("display","none");
  }
}

// When the user clicks on the button, scroll to the top of the document
function GoTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function NumberOfContributedStudies(){
    var number_of_studies = parseInt($("#in_numberofstudies").val());

    html = "";

    for(var i = 1; i <= number_of_studies; i++)
    {
        html += `<div class="file has-name">
                    <label class="file-label">
                        <input class="file-input" type="file" name="user_uploaded_file" id="contributed_file_` + i + `" onchange="GetUserContributedFile(event)">
                        <span class="file-cta">
                            <span class="file-label">Choose the data file for user study ` + i + `</span>
                        </span>
                        <span  class="file-name" id="name_of_contributed_file_` + i + `">...</span>
                    </label>
                </div>`;
    }

    $("#user_contributed_files").html(html);
    user_contribute_files = [];
}

var user_contribute_files = [];

function GetUserContributedFile(event)
{
    var id = event.currentTarget.id;
    sub_id = id.split("_");
    id = sub_id[sub_id.length - 1];

    var input = event.target;

    var div = "#name_of_contributed_file_" + id;
    var filename = input.files[0].name;
    $(div).text(filename);

    for(var i = 0; i < user_contribute_files.length; i++)
    {
        if(user_contribute_files[i]["id"] === id)
        {
            user_contribute_files.splice(i, 1);
        }
    }
    user_contribute_files.push({"id": id, "file": input.files[0]});
}

function SubmitUserData()
{
    var author = $("#in_author").val();
    var title = $("#in_title").val();
    var booktitle = $("#in_booktitle").val();
    var series = $("#in_series").val();
    var year = $("#in_year").val();
    var isbn = $("#in_isbn").val();
    var url = $("#in_url").val();
    var publisher = $("#in_publisher").val();

    var location = $("#in_location").val();
    var pages = $("#in_pages").val();
    var number_of_pages = $("#in_numberofpages").val();
    var article_number = $("#in_articlenumber").val();
    var doi = $("#in_doi").val();
    var address = $("#in_address").val();
    var keywords = $("#in_keywords").val();
    var number_of_user_studies = $("#in_numberofstudies").val();

    if(author != ""
    && title != ""
    && booktitle != ""
    && series != ""
    && year != ""
    && isbn != ""
    && url != ""
    && publisher != "")
    {
        var is_duplicated = false;
        for(var i = 0; i < user_contribute_files.length - 1; i++)
        {
            for(var j = i+1; j < user_contribute_files.length; j++)
            {
                if(user_contribute_files[i]["file"].name === user_contribute_files[j]["file"].name)
                {
                    is_duplicated = true;
                    break;
                }
            }
        }

        if(is_duplicated)
        {
            alert("Please make sure that there is no same data file for two different studies!");
        }
        else{
            var fs = require('fs');

            // Without checking if dir already exists
            fs.mkdir('PATH/TO/DIR');

            // With checking if dir already exists
            if (!fs.existsSync('PATH/TO/DIR')) fs.mkdir('PATH/TO/DIR');
        }
    }
    else
    {
        alert("Please fill in all of the required entries!");
        return;
    }
}

var _currentRankingClass = "All Classes";
var _currentCategory = "btn_overall";
var _category = "Overall";
var _currentObject;

function ChangeRankingClass(btn)
{
    $("#all_classes").removeClass("is-info");
    $("#class_a").removeClass("is-info");
    $("#class_b").removeClass("is-info");
    $("#class_c").removeClass("is-info");
    $("#class_d").removeClass("is-info");
    $("#class_e").removeClass("is-info");
    $("#class_f").removeClass("is-info");
        
    $("#" + btn.id).addClass("is-info");

    if(btn.id === "all_classes")
    {
        _currentRankingClass = "All Classes";
    }
    else if(btn.id === "class_a")
    {
        _currentRankingClass = "Class I";
    }
    else if(btn.id === "class_b")
    {
        _currentRankingClass = "Class II";
    }
    else if(btn.id === "class_c")
    {
        _currentRankingClass = "Class III";
    }
    else if(btn.id === "class_d")
    {
        _currentRankingClass = "Class IV";
    }
    else if(btn.id === "class_e")
    {
        _currentRankingClass = "Class V";
    }
    else if(btn.id === "class_f")
    {
        _currentRankingClass = "Class VI";
    }

    UpdateCategoryAndClassSelection();
}

function ChangeCategory(btn)
{
    $("#btn_overall").removeClass("is-info");
    $("#btn_sp").removeClass("is-info");
    $("#btn_inv").removeClass("is-info");
    $("#btn_real").removeClass("is-info");
    $("#btn_gp").removeClass("is-info");
    $("#btn_hmd").removeClass("is-info");
    $("#btn_mono").removeClass("is-info");
    $("#btn_proj").removeClass("is-info");
        
    $("#" + btn.id).addClass("is-info");

    _currentCategory = btn.id;

    if(_currentCategory === "btn_overall")
    {
        _currentObject = overallObject;

        _category = "Overall";
    }
    else if(_currentCategory === "btn_sp")
    {
        _category = "SP";

        _currentObject = subscalesObject.value.find(function(e)
        {
            return e.name === "SP";
        });
    }
    else if(_currentCategory === "btn_inv")
    {
        _category = "INV";

        _currentObject = subscalesObject.value.find(function(e)
        {
            return e.name === "INV";
        });
    }
    else if(_currentCategory === "btn_real")
    {
        _category = "REAL";

        _currentObject = subscalesObject.value.find(function(e)
        {
            return e.name === "REAL";
        });
    }
    else if(_currentCategory === "btn_gp")
    {
        _category = "GP";

        _currentObject = subscalesObject.value.find(function(e)
        {
            return e.name === "GP";
        });
    }
    else if(_currentCategory === "btn_hmd")
    {
        _category = "3D - HMD";

        _currentObject = visualDisplaysObject.value.find(function(e)
        {
            return e.name === "3D - HMD VR";
        });
    }
    else if(_currentCategory === "btn_mono")
    {       
        _category = "3D - Monoscopic";

        _currentObject = visualDisplaysObject.value.find(function(e)
        {
            return e.name === "3D - Monoscopic";
        });
    }
    else if(_currentCategory === "btn_proj")
    {       
        _category = "3D - Projection Display";

        _currentObject = visualDisplaysObject.value.find(function(e)
        {
            return e.name === "Projection Display";
        });
    }

    UpdateCategoryAndClassSelection();
}

function UpdateCategoryAndClassSelection()
{    
    var _currentClassObject = _currentObject;

    if(_currentRankingClass === "All Classes")
    {
        _currentClassObject = _currentObject.value.find(function(e)
        {
            return e.name === "Overall";
        });
        
        _currentClassObject = _currentClassObject.value.find(function(e)
        {
            return e.name === "Summary";
        });
    }
    else
    {
        _currentClassObject = _currentObject.value.find(function(e)
        {
            return e.name === "AdjectiveRatings";
        });

        _currentClassObject = _currentClassObject.value.find(function(e)
        {
            return e.name === _currentRankingClass;
        });
    }

    AddScoreBarChart(_currentClassObject, "#main_bar_chart_for_score");
    AddYearBarChart(_currentClassObject, "#main_bar_chart_for_year");
    WriteTable(_currentClassObject, "#main_list_publications");

    $("#info_main_category").html(_category);
    $("#info_main_participants").html(_currentClassObject.participants);
    $("#info_main_percent").html(_currentClassObject.percent);
    $("#info_main_adjective_rating").html(_currentRankingClass);   
    $("#info_main_years").html(_currentClassObject.years.length);  
    $("#info_main_user_studies").html(_currentClassObject.user_studies.length);   
    $("#info_main_publications").html(_currentClassObject.publications.length);  
    
    SortBy();
}

function SortBy(isYear = true, isNPar = false, isAscending = true)
{
    var table, needSwapping = false;

    var table = document.getElementById("reported_papers_table");
    var rows = table.rows;
    var islooped = true;

    var row1, row2;
    var id = 0;

    if(isYear)
    {
        id = 5;
    }    

    if(isNPar)
    {
        id = 4;
    }    
        
    for (var i = 1; i < (rows.length - 2); i++) {
        for(var j = i + 1; j < (rows.length - 1); j++)
        {
            row1 = parseInt(rows[i].getElementsByTagName("td")[id].innerHTML);
            row2 = parseInt(rows[j].getElementsByTagName("td")[id].innerHTML);

            if((isAscending && row1 > row2) || (!isAscending && row1 < row2))
            {
                rows[i].parentNode.insertBefore(rows[j], rows[i]);
                switching = true;
            }
        }          
        
    }
}

function YearSortBy(btn, isYear = true, isNPar = false, isAscending = true)
{
    $("#btn_year_ascending").removeClass("is-info");
    $("#btn_year_descending").removeClass("is-info");
        
    $("#" + btn.id).addClass("is-info");

    SortBy(isYear, isNPar, isAscending);
}

function NParSortBy(btn, isYear = false, isNPar = true, isAscending = true)
{
    $("#btn_npar_ascending").removeClass("is-info");
    $("#btn_npar_descending").removeClass("is-info");
        
    $("#" + btn.id).addClass("is-info");

    SortBy(isYear, isNPar, isAscending);
}

