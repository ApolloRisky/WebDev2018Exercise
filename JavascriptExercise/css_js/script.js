// //Handle slidebar effect
// var toggleNavTabs = function(id) {
//     var target = document.getElementById(id);
//     if(target.className!=='active'){
//         target.classList.toggle('active');
//         switch (id){
//             case 'slide':
//                 document.getElementById('multitable').classList.toggle('active');
//                 document.getElementById('mainFrame').setAttribute('src','/SlideShow/slideShow.html');
//                 break;
//             case 'multitable':
//                 document.getElementById('slide').classList.toggle('active');
//                 document.getElementById('mainFrame').setAttribute('src','/Multiplication table /multi_table.html');
//                 break;
//             default:
//         }
//     }
// }
// var ul = document.getElementById('tabs'); // Parent

// ul.addEventListener('click', function (e) {
//     var target = e.target; // Clicked element
//     while (target && target.parentNode !== ul) {
//         target = target.parentNode; // If the clicked element isn't a direct child
//         if(!target) { return; } // If element doesn't exist
//     }
//     if (target.tagName === 'LI'){
//         //alert(target.id); // Check if the element is a LI //For DEBUG
//         toggleNavTabs(target.id);
//     }
// });