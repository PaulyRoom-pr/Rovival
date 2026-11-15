/* Primary Retextured Classic Development Stylesheet */
/*stylelint-disable*/

body {
  background-color: white;
  color: black;
  font-family: 'Verdana', sans-serif;
}

a:link {
  color: blue;
}

a:visited {
  color: blue
}

a:active {
  color: red
}


.Navigation a:link {
  color: white;
}

.Navigation a:visited {
  color: white
}

.Navigation a:active {
  color: red
}

blockquote {
background: rgb(230,230,230);
padding: 1px 15px;
border: 1px solid blue;
border-width: 1px 1px 1px 5px;
}

.browseTable {
  border-collapse: collapse;
  margin-bottom: 0px;
  background-color:white;
  border-color:#CCCCCC;
  border-width:1px;
  border-style:solid;
}

.browseHeader {
  background-color: #6e99c9;
  color: white;
}

.profileDiv {
  width: 100%;
  height: 100%;
  background-color: lightsteelblue;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
  border-left: solid 1px black;
  border-right: solid 1px black;
  font-size: 14pt;
  text-align: center;
  padding-top: 2px;
  padding-right: 2px;
  padding-bottom: 2px;
  padding-left: 2px;

}

.profileDesc {
  font-size: 9pt;
}

select:disabled
{
	display: none
}

.EastereggLink {
  /*visibility: hidden*/
  color: transparent
}

.fakeLink {
  color: blue;
  text-decoration: underline;
  display: inline;
}
:root {
  --ink: #252b32;
  --muted: #66717c;
  --blue: #315f89;
  --blue-dark: #234665;
  --line: #d4dce3;
  --page: #eef2f5;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--page);
  color: var(--ink);
  font-family: Verdana, Arial, sans-serif;
  line-height: 1.65;
}
a { transition: color .15s ease, background-color .15s ease, border-color .15s ease; }
.site-header {
  min-height: 68px;
  padding: 12px max(20px, calc((100% - 980px) / 2));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: var(--blue);
  border-bottom: 4px solid var(--blue-dark);
}
.brand {
  color: #fff !important;
  text-decoration: none;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 1.5px;
}
.Navigation { display: flex; flex-wrap: wrap; gap: 20px; }
.Navigation a { color: #fff !important; text-decoration: none; font-weight: bold; }
.Navigation a:hover { text-decoration: underline; }
#PageContent {
  width: min(100% - 32px, 980px);
  margin: 28px auto 40px;
  padding: clamp(18px, 4vw, 36px);
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: 0 3px 14px rgba(25, 42, 58, .07);
}
.announcement {
  margin: 0 0 28px;
  padding: 11px 14px;
  color: #24415b;
  background: #e8f2fb;
  border: 1px solid #b7cde0;
  border-radius: 4px;
}
.welcome { padding: 4px 0 20px; }
.welcome h1 { margin: 0 0 10px; font-size: clamp(30px, 5vw, 43px); line-height: 1.2; }
.eyebrow { margin: 0 0 6px; color: var(--blue); font-size: 11px; font-weight: bold; letter-spacing: 1.5px; }
.welcome ol { padding-left: 24px; }
.feature-video { margin: 22px 0 34px; }
.video-frame { width: min(100%, 700px); margin: 0 auto; aspect-ratio: 16 / 9; }
.video-frame iframe { display: block; width: 100%; height: 100%; border: 0; border-radius: 5px; }
#cool-places { scroll-margin-top: 20px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 15px; margin-bottom: 14px; }
.section-heading h2 { margin: 0; font-size: 25px; }
.section-heading p:not(.eyebrow) { margin: 3px 0 0; color: var(--muted); }
.update-note { color: var(--muted); font-size: 12px; }
.cool-places-content {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  padding: 14px;
  background: #f6f8fa;
  border: 1px solid var(--line);
  border-radius: 5px;
}
.place-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px;
  color: #244f78 !important;
  text-align: center;
  text-decoration: none;
  background: white;
  border: 1px solid #d6dde4;
  border-radius: 4px;
}
.place-card:hover { background: #edf5fc; border-color: #7ca5c8; }
.place-placeholder { font-size: 38px; line-height: 1.4; }
.place-label { font-size: 12px; font-weight: bold; }
#CoolPlacesNote { display: block; margin-top: 10px; color: var(--muted); }
.site-footer { padding: 20px max(20px, calc((100% - 980px) / 2)); color: #eaf2f8; background: #263e54; }
.footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; font-size: 12px; }
.footer-inner strong { letter-spacing: 1.5px; }
.footer-inner span { color: #c3d2df; }
.footer-inner a { color: white; }
@media (max-width: 620px) {
  .site-header { align-items: flex-start; flex-direction: column; gap: 8px; }
  .Navigation { gap: 16px; }
  #PageContent { width: 100%; margin: 0; border-left: 0; border-right: 0; padding: 18px; }
  .cool-places-content { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .section-heading { align-items: flex-start; flex-direction: column; }
  .footer-inner { align-items: flex-start; flex-direction: column; }
}
