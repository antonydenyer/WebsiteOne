$(function(){function o(){var o=window.location.hash;o&&$(o+"s a").tab("show"),$("html,body").scrollTop($("body").scrollTop()),$(".nav-tabs a").click(function(){$(this).tab("show"),window.location.hash=this.hash.replace("s_list",""),$("html,body").scrollTop($("body").scrollTop())});var a=$("#HOA-placeholder");null!=a&&"undefined"!=typeof gapi&&gapi.hangout.render("HOA-placeholder",{topic:a.data("hoa-title"),render:"createhangout",hangout_type:"onair",initial_apps:[{app_type:"ROOM_APP"}]})}$(document).ready(o),$(document).on("page:load",o)});