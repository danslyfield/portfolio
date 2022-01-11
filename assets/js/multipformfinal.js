      //define the chart package
      google.charts.load('current', {'packages':['corechart']});
      //set what is supposed to happen when the page loads. You typically want a state of the chart to show on load, but in this case, there is no data on load.
      //google.charts.setOnLoadCallback(drawChart);
     
     //submit requires text inputs to use parseInt to work as numbers
      function drawChart() {
	if (document.getElementById('soc1').checked) {
       s01 = parseInt(document.getElementById('soc1').value)
	} else {
	s01 = 0
}
	if (document.getElementById('soc2').checked) {
       s02 = parseInt(document.getElementById('soc2').value)
	} else {
	s02 = 0
}
	if (document.getElementById('soc3').checked) {
       s03 = parseInt(document.getElementById('soc3').value)
	} else {
	s03 = 0
}
	if (document.getElementById('soc4').checked) {
       s04 = parseInt(document.getElementById('soc4').value)
	} else {
	s04 = 0
}
	if (document.getElementById('soc5').checked) {
       s05 = parseInt(document.getElementById('soc5').value)
	} else {
	s05 = 0
}
	if (document.getElementById('soc6').checked) {
       s06 = parseInt(document.getElementById('soc6').value)
	} else {
	s06 = 0
}
	if (document.getElementById('soc7').checked) {
       s07 = parseInt(document.getElementById('soc7').value)
	} else {
	s07 = 0
}
	if (document.getElementById('soc8').checked) {
       s08 = parseInt(document.getElementById('soc8').value)
	} else {
	s08 = 0
}
	if (document.getElementById('soc9').checked) {
       s09 = parseInt(document.getElementById('soc9').value)
	} else {
	s09 = 0
}
	if (document.getElementById('soc10').checked) {
       s010 = parseInt(document.getElementById('soc10').value)
	} else {
	s010 = 0
}
	if (document.getElementById('soc11').checked) {
       s011 = parseInt(document.getElementById('soc11').value)
	} else {
	s011 = 0
}
	if (document.getElementById('soc12').checked) {
       s012 = parseInt(document.getElementById('soc12').value)
	} else {
	s012 = 0
}
	if (document.getElementById('soc13').checked) {
       s013 = parseInt(document.getElementById('soc13').value)
	} else {
	s013 = 0
}
	if (document.getElementById('soc14').checked) {
       s014 = parseInt(document.getElementById('soc14').value)
	} else {
	s014 = 0
}
	if (document.getElementById('soc15').checked) {
       s015 = parseInt(document.getElementById('soc15').value)
	} else {
	s015 = 0
}
	if (document.getElementById('soc16').checked) {
       s016 = parseInt(document.getElementById('soc16').value)
	} else {
	s016 = 0
}
	if (document.getElementById('soc17').checked) {
       s017 = parseInt(document.getElementById('soc17').value)
	} else {
	s017 = 0
}
	if (document.getElementById('soc18').checked) {
       s018 = parseInt(document.getElementById('soc18').value)
	} else {
	s018 = 0
}
	if (document.getElementById('soc19').checked) {
       s019 = parseInt(document.getElementById('soc19').value)
	} else {
	s019 = 0
}
	if (document.getElementById('soc20').checked) {
       s020 = parseInt(document.getElementById('soc20').value)
	} else {
	s020 = 0
}
	if (document.getElementById('soc21').checked) {
       s021 = parseInt(document.getElementById('soc21').value)
	} else {
	s021 = 0
}
	if (document.getElementById('soc22').checked) {
       s022 = parseInt(document.getElementById('soc22').value)
	} else {
	s022 = 0
}
	if (document.getElementById('soc23').checked) {
       s023 = parseInt(document.getElementById('soc23').value)
	} else {
	s023 = 0
}
	if (document.getElementById('soc24').checked) {
       s024 = parseInt(document.getElementById('soc24').value)
	} else {
	s024 = 0
}
	if (document.getElementById('soc25').checked) {
       s025 = parseInt(document.getElementById('soc25').value)
	} else {
	s025 = 0
}
	if (document.getElementById('soc26').checked) {
       s026 = parseInt(document.getElementById('soc26').value)
	} else {
	s026 = 0
}
	if (document.getElementById('soc27').checked) {
       s027 = parseInt(document.getElementById('soc27').value)
	} else {
	s027 = 0
}
	if (document.getElementById('soc28').checked) {
       s028 = parseInt(document.getElementById('soc28').value)
	} else {
	s028 = 0
}
	if (document.getElementById('soc29').checked) {
       s029 = parseInt(document.getElementById('soc29').value)
	} else {
	s029 = 0
}
	if (document.getElementById('soc30').checked) {
       s030 = parseInt(document.getElementById('soc30').value)
	} else {
	s030 = 0
}
	if (document.getElementById('soc31').checked) {
       s031 = parseInt(document.getElementById('soc31').value)
	} else {
	s031 = 0
}
	if (document.getElementById('soc32').checked) {
       s032 = parseInt(document.getElementById('soc32').value)
	} else {
	s032 = 0
}
	if (document.getElementById('soc33').checked) {
       s033 = parseInt(document.getElementById('soc33').value)
	} else {
	s033 = 0
}
	if (document.getElementById('soc34').checked) {
       s034 = parseInt(document.getElementById('soc34').value)
	} else {
	s034 = 0
}
	if (document.getElementById('soc35').checked) {
       s035 = parseInt(document.getElementById('soc35').value)
	} else {
	s035 = 0
}
	if (document.getElementById('soc36').checked) {
       s036 = parseInt(document.getElementById('soc36').value)
	} else {
	s036 = 0
}
	if (document.getElementById('soc37').checked) {
       s037 = parseInt(document.getElementById('soc37').value)
	} else {
	s037 = 0
}
	if (document.getElementById('soc38').checked) {
       s038 = parseInt(document.getElementById('soc38').value)
	} else {
	s038 = 0
}
	if (document.getElementById('soc39').checked) {
       s039 = parseInt(document.getElementById('soc39').value)
	} else {
	s039 = 0
}
	if (document.getElementById('soc40').checked) {
       s040 = parseInt(document.getElementById('soc40').value)
	} else {
	s040 = 0
}
	if (document.getElementById('dir1').checked) {
       d01 = parseInt(document.getElementById('dir1').value)
	} else {
	d01 = 0
}
	if (document.getElementById('dir2').checked) {
       d02 = parseInt(document.getElementById('dir2').value)
	} else {
	d02 = 0
}
	if (document.getElementById('dir3').checked) {
       d03 = parseInt(document.getElementById('dir3').value)
	} else {
	d03 = 0
}
	if (document.getElementById('dir4').checked) {
       d04 = parseInt(document.getElementById('dir4').value)
	} else {
	d04 = 0
}
	if (document.getElementById('dir5').checked) {
       d05 = parseInt(document.getElementById('dir5').value)
	} else {
	d05 = 0
}
	if (document.getElementById('dir6').checked) {
       d06 = parseInt(document.getElementById('dir6').value)
	} else {
	d06 = 0
}
	if (document.getElementById('dir7').checked) {
       d07 = parseInt(document.getElementById('dir7').value)
	} else {
	d07 = 0
}
	if (document.getElementById('dir8').checked) {
       d08 = parseInt(document.getElementById('dir8').value)
	} else {
	d08 = 0
}
	if (document.getElementById('dir9').checked) {
       d09 = parseInt(document.getElementById('dir9').value)
	} else {
	d09 = 0
}
	if (document.getElementById('dir10').checked) {
       d010 = parseInt(document.getElementById('dir10').value)
	} else {
	d010 = 0
}
	if (document.getElementById('dir11').checked) {
       d011 = parseInt(document.getElementById('dir11').value)
	} else {
	d011 = 0
}
	if (document.getElementById('dir12').checked) {
       d012 = parseInt(document.getElementById('dir12').value)
	} else {
	d012 = 0
}
	if (document.getElementById('dir13').checked) {
       d013 = parseInt(document.getElementById('dir13').value)
	} else {
	d013 = 0
}
	if (document.getElementById('dir14').checked) {
       d014 = parseInt(document.getElementById('dir14').value)
	} else {
	d014 = 0
}
	if (document.getElementById('dir15').checked) {
       d015 = parseInt(document.getElementById('dir15').value)
	} else {
	d015 = 0
}
	if (document.getElementById('dir16').checked) {
       d016 = parseInt(document.getElementById('dir16').value)
	} else {
	d016 = 0
}
	if (document.getElementById('dir17').checked) {
       d017 = parseInt(document.getElementById('dir17').value)
	} else {
	d017 = 0
}
	if (document.getElementById('dir18').checked) {
       d018 = parseInt(document.getElementById('dir18').value)
	} else {
	d018 = 0
}
	if (document.getElementById('dir19').checked) {
       d019 = parseInt(document.getElementById('dir19').value)
	} else {
	d019 = 0
}
	if (document.getElementById('dir20').checked) {
       d020 = parseInt(document.getElementById('dir20').value)
	} else {
	d020 = 0
}
	if (document.getElementById('dir21').checked) {
       d021 = parseInt(document.getElementById('dir21').value)
	} else {
	d021 = 0
}
	if (document.getElementById('dir22').checked) {
       d022 = parseInt(document.getElementById('dir22').value)
	} else {
	d022 = 0
}
	if (document.getElementById('dir23').checked) {
       d023 = parseInt(document.getElementById('dir23').value)
	} else {
	d023 = 0
}
	if (document.getElementById('dir24').checked) {
       d024 = parseInt(document.getElementById('dir24').value)
	} else {
	d024 = 0
}
	if (document.getElementById('dir25').checked) {
       d025 = parseInt(document.getElementById('dir25').value)
	} else {
	d025 = 0
}
	if (document.getElementById('dir26').checked) {
       d026 = parseInt(document.getElementById('dir26').value)
	} else {
	d026 = 0
}
	if (document.getElementById('dir27').checked) {
       d027 = parseInt(document.getElementById('dir27').value)
	} else {
	d027 = 0
}
	if (document.getElementById('dir28').checked) {
       d028 = parseInt(document.getElementById('dir28').value)
	} else {
	d028 = 0
}
	if (document.getElementById('dir29').checked) {
       d029 = parseInt(document.getElementById('dir29').value)
	} else {
	d029 = 0
}
	if (document.getElementById('dir30').checked) {
       d030 = parseInt(document.getElementById('dir30').value)
	} else {
	d030 = 0
}
	if (document.getElementById('dir31').checked) {
       d031 = parseInt(document.getElementById('dir31').value)
	} else {
	d031 = 0
}
	if (document.getElementById('dir32').checked) {
       d032 = parseInt(document.getElementById('dir32').value)
	} else {
	d032 = 0
}
	if (document.getElementById('dir33').checked) {
       d033 = parseInt(document.getElementById('dir33').value)
	} else {
	d033 = 0
}
	if (document.getElementById('dir34').checked) {
       d034 = parseInt(document.getElementById('dir34').value)
	} else {
	d034 = 0
}
	if (document.getElementById('dir35').checked) {
       d035 = parseInt(document.getElementById('dir35').value)
	} else {
	d035 = 0
}
	if (document.getElementById('dir36').checked) {
       d036 = parseInt(document.getElementById('dir36').value)
	} else {
	d036 = 0
}
	if (document.getElementById('dir37').checked) {
       d037 = parseInt(document.getElementById('dir37').value)
	} else {
	d037 = 0
}
	if (document.getElementById('dir38').checked) {
       d038 = parseInt(document.getElementById('dir38').value)
	} else {
	d038 = 0
}
	if (document.getElementById('dir39').checked) {
       d039 = parseInt(document.getElementById('dir39').value)
	} else {
	d039 = 0
}
	if (document.getElementById('dir40').checked) {
       d040 = parseInt(document.getElementById('dir40').value)
	} else {
	d040 = 0
}
	if (document.getElementById('pro1').checked) {
       p01 = parseInt(document.getElementById('pro1').value)
	} else {
	p01 = 0
}
	if (document.getElementById('pro2').checked) {
       p02 = parseInt(document.getElementById('pro2').value)
	} else {
	p02 = 0
}
	if (document.getElementById('pro3').checked) {
       p03 = parseInt(document.getElementById('pro3').value)
	} else {
	p03 = 0
}
	if (document.getElementById('pro4').checked) {
       p04 = parseInt(document.getElementById('pro4').value)
	} else {
	p04 = 0
}
	if (document.getElementById('pro5').checked) {
       p05 = parseInt(document.getElementById('pro5').value)
	} else {
	p05 = 0
}
	if (document.getElementById('pro6').checked) {
       p06 = parseInt(document.getElementById('pro6').value)
	} else {
	p06 = 0
}
	if (document.getElementById('pro7').checked) {
       p07 = parseInt(document.getElementById('pro7').value)
	} else {
	p07 = 0
}
	if (document.getElementById('pro8').checked) {
       p08 = parseInt(document.getElementById('pro8').value)
	} else {
	p08 = 0
}
	if (document.getElementById('pro9').checked) {
       p09 = parseInt(document.getElementById('pro9').value)
	} else {
	p09 = 0
}
	if (document.getElementById('pro10').checked) {
       p010 = parseInt(document.getElementById('pro10').value)
	} else {
	p010 = 0
}
	if (document.getElementById('pro11').checked) {
       p011 = parseInt(document.getElementById('pro11').value)
	} else {
	p011 = 0
}
	if (document.getElementById('pro12').checked) {
       p012 = parseInt(document.getElementById('pro12').value)
	} else {
	p012 = 0
}
	if (document.getElementById('pro13').checked) {
       p013 = parseInt(document.getElementById('pro13').value)
	} else {
	p013 = 0
}
	if (document.getElementById('pro14').checked) {
       p014 = parseInt(document.getElementById('pro14').value)
	} else {
	p014 = 0
}
	if (document.getElementById('pro15').checked) {
       p015 = parseInt(document.getElementById('pro15').value)
	} else {
	p015 = 0
}
	if (document.getElementById('pro16').checked) {
       p016 = parseInt(document.getElementById('pro16').value)
	} else {
	p016 = 0
}
	if (document.getElementById('pro17').checked) {
       p017 = parseInt(document.getElementById('pro17').value)
	} else {
	p017 = 0
}
	if (document.getElementById('pro18').checked) {
       p018 = parseInt(document.getElementById('pro18').value)
	} else {
	p018 = 0
}
	if (document.getElementById('pro19').checked) {
       p019 = parseInt(document.getElementById('pro19').value)
	} else {
	p019 = 0
}
	if (document.getElementById('pro20').checked) {
       p020 = parseInt(document.getElementById('pro20').value)
	} else {
	p020 = 0
}
	if (document.getElementById('pro21').checked) {
       p021 = parseInt(document.getElementById('pro21').value)
	} else {
	p021 = 0
}
	if (document.getElementById('pro22').checked) {
       p022 = parseInt(document.getElementById('pro22').value)
	} else {
	p022 = 0
}
	if (document.getElementById('pro23').checked) {
       p023 = parseInt(document.getElementById('pro23').value)
	} else {
	p023 = 0
}
	if (document.getElementById('pro24').checked) {
       p024 = parseInt(document.getElementById('pro24').value)
	} else {
	p024 = 0
}
	if (document.getElementById('pro25').checked) {
       p025 = parseInt(document.getElementById('pro25').value)
	} else {
	p025 = 0
}
	if (document.getElementById('pro26').checked) {
       p026 = parseInt(document.getElementById('pro26').value)
	} else {
	p026 = 0
}
	if (document.getElementById('pro27').checked) {
       p027 = parseInt(document.getElementById('pro27').value)
	} else {
	p027 = 0
}
	if (document.getElementById('pro28').checked) {
       p028 = parseInt(document.getElementById('pro28').value)
	} else {
	p028 = 0
}
	if (document.getElementById('pro29').checked) {
       p029 = parseInt(document.getElementById('pro29').value)
	} else {
	p029 = 0
}
	if (document.getElementById('pro30').checked) {
       p030 = parseInt(document.getElementById('pro30').value)
	} else {
	p030 = 0
}
	if (document.getElementById('pro31').checked) {
       p031 = parseInt(document.getElementById('pro31').value)
	} else {
	p031 = 0
}
	if (document.getElementById('pro32').checked) {
       p032 = parseInt(document.getElementById('pro32').value)
	} else {
	p032 = 0
}
	if (document.getElementById('pro33').checked) {
       p033 = parseInt(document.getElementById('pro33').value)
	} else {
	p033 = 0
}
	if (document.getElementById('pro34').checked) {
       p034 = parseInt(document.getElementById('pro34').value)
	} else {
	p034 = 0
}
	if (document.getElementById('pro35').checked) {
       p035 = parseInt(document.getElementById('pro35').value)
	} else {
	p035 = 0
}
	if (document.getElementById('pro36').checked) {
       p036 = parseInt(document.getElementById('pro36').value)
	} else {
	p036 = 0
}
	if (document.getElementById('pro37').checked) {
       p037 = parseInt(document.getElementById('pro37').value)
	} else {
	p037 = 0
}
	if (document.getElementById('pro38').checked) {
       p038 = parseInt(document.getElementById('pro38').value)
	} else {
	p038 = 0
}
	if (document.getElementById('pro39').checked) {
       p039 = parseInt(document.getElementById('pro39').value)
	} else {
	p039 = 0
}
	if (document.getElementById('pro40').checked) {
       p040 = parseInt(document.getElementById('pro40').value)
	} else {
	p040 = 0
}
	if (document.getElementById('ach1').checked) {
       a01 = parseInt(document.getElementById('ach1').value)
	} else {
	a01 = 0
}
	if (document.getElementById('ach2').checked) {
       a02 = parseInt(document.getElementById('ach2').value)
	} else {
	a02 = 0
}
	if (document.getElementById('ach3').checked) {
       a03 = parseInt(document.getElementById('ach3').value)
	} else {
	a03 = 0
}
	if (document.getElementById('ach4').checked) {
       a04 = parseInt(document.getElementById('ach4').value)
	} else {
	a04 = 0
}
	if (document.getElementById('ach5').checked) {
       a05 = parseInt(document.getElementById('ach5').value)
	} else {
	a05 = 0
}
	if (document.getElementById('ach6').checked) {
       a06 = parseInt(document.getElementById('ach6').value)
	} else {
	a06 = 0
}
	if (document.getElementById('ach7').checked) {
       a07 = parseInt(document.getElementById('ach7').value)
	} else {
	a07 = 0
}
	if (document.getElementById('ach8').checked) {
       a08 = parseInt(document.getElementById('ach8').value)
	} else {
	a08 = 0
}
	if (document.getElementById('ach9').checked) {
       a09 = parseInt(document.getElementById('ach9').value)
	} else {
	a09 = 0
}
	if (document.getElementById('ach10').checked) {
       a010 = parseInt(document.getElementById('ach10').value)
	} else {
	a010 = 0
}
	if (document.getElementById('ach11').checked) {
       a011 = parseInt(document.getElementById('ach11').value)
	} else {
	a011 = 0
}
	if (document.getElementById('ach12').checked) {
       a012 = parseInt(document.getElementById('ach12').value)
	} else {
	a012 = 0
}
	if (document.getElementById('ach13').checked) {
       a013 = parseInt(document.getElementById('ach13').value)
	} else {
	a013 = 0
}
	if (document.getElementById('ach14').checked) {
       a014 = parseInt(document.getElementById('ach14').value)
	} else {
	a014 = 0
}
	if (document.getElementById('ach15').checked) {
       a015 = parseInt(document.getElementById('ach15').value)
	} else {
	a015 = 0
}
	if (document.getElementById('ach16').checked) {
       a016 = parseInt(document.getElementById('ach16').value)
	} else {
	a016 = 0
}
	if (document.getElementById('ach17').checked) {
       a017 = parseInt(document.getElementById('ach17').value)
	} else {
	a017 = 0
}
	if (document.getElementById('ach18').checked) {
       a018 = parseInt(document.getElementById('ach18').value)
	} else {
	a018 = 0
}
	if (document.getElementById('ach19').checked) {
       a019 = parseInt(document.getElementById('ach19').value)
	} else {
	a019 = 0
}
	if (document.getElementById('ach20').checked) {
       a020 = parseInt(document.getElementById('ach20').value)
	} else {
	a020 = 0
}
	if (document.getElementById('ach21').checked) {
       a021 = parseInt(document.getElementById('ach21').value)
	} else {
	a021 = 0
}
	if (document.getElementById('ach22').checked) {
       a022 = parseInt(document.getElementById('ach22').value)
	} else {
	a022 = 0
}
	if (document.getElementById('ach23').checked) {
       a023 = parseInt(document.getElementById('ach23').value)
	} else {
	a023 = 0
}
	if (document.getElementById('ach24').checked) {
       a024 = parseInt(document.getElementById('ach24').value)
	} else {
	a024 = 0
}
	if (document.getElementById('ach25').checked) {
       a025 = parseInt(document.getElementById('ach25').value)
	} else {
	a025 = 0
}
	if (document.getElementById('ach26').checked) {
       a026 = parseInt(document.getElementById('ach26').value)
	} else {
	a026 = 0
}
	if (document.getElementById('ach27').checked) {
       a027 = parseInt(document.getElementById('ach27').value)
	} else {
	a027 = 0
}
	if (document.getElementById('ach28').checked) {
       a028 = parseInt(document.getElementById('ach28').value)
	} else {
	a028 = 0
}
	if (document.getElementById('ach29').checked) {
       a029 = parseInt(document.getElementById('ach29').value)
	} else {
	a029 = 0
}
	if (document.getElementById('ach30').checked) {
       a030 = parseInt(document.getElementById('ach30').value)
	} else {
	a030 = 0
}
	if (document.getElementById('ach31').checked) {
       a031 = parseInt(document.getElementById('ach31').value)
	} else {
	a031 = 0
}
	if (document.getElementById('ach32').checked) {
       a032 = parseInt(document.getElementById('ach32').value)
	} else {
	a032 = 0
}
	if (document.getElementById('ach33').checked) {
       a033 = parseInt(document.getElementById('ach33').value)
	} else {
	a033 = 0
}
	if (document.getElementById('ach34').checked) {
       a034 = parseInt(document.getElementById('ach34').value)
	} else {
	a034 = 0
}
	if (document.getElementById('ach35').checked) {
       a035 = parseInt(document.getElementById('ach35').value)
	} else {
	a035 = 0
}
	if (document.getElementById('ach36').checked) {
       a036 = parseInt(document.getElementById('ach36').value)
	} else {
	a036 = 0
}
	if (document.getElementById('ach37').checked) {
       a037 = parseInt(document.getElementById('ach37').value)
	} else {
	a037 = 0
}
	if (document.getElementById('ach38').checked) {
       a038 = parseInt(document.getElementById('ach38').value)
	} else {
	a038 = 0
}
	if (document.getElementById('ach39').checked) {
       a039 = parseInt(document.getElementById('ach39').value)
	} else {
	a039 = 0
}
	if (document.getElementById('ach40').checked) {
       a040 = parseInt(document.getElementById('ach40').value)
	} else {
	a040 = 0
}



	achieve1 = a01 + a02 + a03 + a04 + a05 + a06 + a07 + a08 + a09 + a010 + a011 + a012 + a013 + a014 + a015 + a016 + a017 + a018 + a019 + a020 + a021 + a022 + a023 + a024 + a025 + a026 + a027 + a028 + a029 + a030 + a031 + a032 + a033 + a034 + a035 + a036 + a037 + a038 + a039 + a040;
	direct1 = d01 + d02 + d03 + d04 + d05 + d06 + d07 + d08 + d09 + d010 + d011 + d012 + d013 + d014 + d015 + d016 + d017 + d018 + d019 + d020 + d021 + d022 + d023 + d024 + d025 + d026 + d027 + d028 + d029 + d030 + d031 + d032 + d033 + d034 + d035 + d036 + d037 + d038 + d039 + d040;
	protect1 = p01 + p02 + p03 + p04 + p05 + p06 + p07 + p08 + p09 + p010 + p011 + p012 + p013 + p014 + p015 + p016 + p017 + p018 + p019 + p020 + p021 + p022 + p023 + p024 + p025 + p026 + p027 + p028 + p029 + p030 + p031 + p032 + p033 + p034 + p035 + p036 + p037 + p038 + p039 + p040;
        social1 = s01 + s02 + s03 + s04 + s05 + s06 + s07 + s08 + s09 + s010 + s011 + s012 + s013 + s014 + s015 + s016 + s017 + s018 + s019 + s020 + s021 + s022 + s023 + s024 + s025 + s026 + s027 + s028 + s029 + s030 + s031 + s032 + s033 + s034 + s035 + s036 + s037 + s038 + s039 + s040;
             
       
       //replace data with variable names
       var data = google.visualization.arrayToDataTable([
          ['Style', 'Percentage'],
          ['Achiever',     achieve1],
          ['Director',      direct1],
          ['Protector',  protect1],
          ['Socializer', social1]
        ]);
        var options = {
          title: 'Communication STYLE\u2122 Preference Combination',
	  colors: ['#ec1f27', '#818286', '#669c41', '#f26624'],
	  backgroundColor: 'transparent'
        };
    //the id is the DOM location to draw the chart    
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
      }
