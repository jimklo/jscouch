/*
  Licensed under the Apache License, Version 2.0 (the "License"); you may not
  use this file except in compliance with the License.  You may obtain a copy
  of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
  License for the specific language governing permissions and limitations under
  the License.

  Initial implementation:

  * http://www.mudynamics.com
  * http://labs.mudynamics.com
  * http://www.pcapr.net
*/

(function($) {
  var now = new Date().getTime();
  var millisInHHour = 1000*60*30;

  $.jscouch = $.jscouch || {};
  $.jscouch.documents = $.jscouch.documents || {};
  $.extend($.jscouch.documents, {
    load: function() {
      // popluate the DB with initial entries

      var lr_data = [{
    "_id": "1",
    "_rev": "1-107513e302971c42f977be646a8825b1",
    "doc_type": "resource_data",
    "resource_locator": "http://beyondpenguins.nsdl.org/issue/column.php?date=December2008&departmentid=professional&columnid=professional!podcast",
    "update_timestamp": "2011-11-01T03:15:07.027184Z",
    "resource_data": "<nsdl_dc:nsdl_dc xmlns:nsdl_dc=\"http://ns.nsdl.org/nsdl_dc_v1.02/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:dct=\"http://purl.org/dc/terms/\" xmlns:ieee=\"http://www.ieee.org/xsd/LOMv1p0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.openarchives.org/OAI/2.0/\" schemaVersion=\"1.02.020\" xsi:schemaLocation=\"http://ns.nsdl.org/nsdl_dc_v1.02/ http://ns.nsdl.org/schemas/nsdl_dc/nsdl_dc_v1.02.xsd\">\u000a  <dc:identifier xsi:type=\"dct:URI\">http://beyondpenguins.nsdl.org/issue/column.php?date=December2008&amp;departmentid=professional&amp;columnid=professional!podcast</dc:identifier>\u000a  <dc:title>A Walk Through the Earth: Volcanoes and Earthquakes (Beyond Penguins and Polar Bears Episode 1)</dc:title>\u000a  <dc:description>This article describes and links to a podcast episode in which Eric Muller, science educator for the Exploratorium Teacher Institute, provides a hands-on, \"feet-on\" way of teaching about volcanoes and the layers of the Earth. The article also includes information about using podcasts in elementary classrooms and a link to the Exploratorium Teacher Institute in San Francisco, CA.</dc:description>\u000a  <dc:subject>Earth Science</dc:subject>\u000a  <dc:subject>Volcanoes</dc:subject>\u000a  <dc:subject>Earthquakes</dc:subject>\u000a  <dc:subject>podcast</dc:subject>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100025D</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100257B</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S101A58E</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100BE36</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S10180F9</dct:conformsTo>\u000a  <dc:creator>Robert Payo</dc:creator>\u000a  <dc:creator>Stephanie Chasteen</dc:creator>\u000a  <dc:creator>Eric Muller</dc:creator>\u000a  <dc:creator>Exploratorium</dc:creator>\u000a  <dc:rights>Copyright Ohio State University December 2008</dc:rights>\u000a  <dct:license xsi:type=\"dct:URI\">http://creativecommons.org/licenses/by-sa/3.0/</dct:license>\u000a  <dct:license xsi:type=\"dct:URI\">http://beyondpenguins.nsdl.org/information.php?topic=use</dct:license>\u000a  <dct:license>This article is licensed under a Creative Commons Attribution-Share Alike 3.0 Unported United States License.</dct:license>\u000a  <dct:isPartOf xsi:type=\"dct:URI\">http://beyondpenguins.nsdl.org/issue/index.php?date=December2008</dct:isPartOf>\u000a  <dct:isPartOf>Beyond Penguins and Polar Bears Issue 9: Earth's Changing Surface (December 2008)</dct:isPartOf>\u000a  <dc:identifier xsi:type=\"nsdl_dc:ResourceHandle\">hdl:2200/20090430125600516T</dc:identifier>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Elementary School</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 1</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Early Elementary</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 2</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Upper Elementary</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 3</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 4</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 5</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Middle School</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 6</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 7</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 8</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Informal Education</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Elementary School Programming</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Middle School Programming</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">General Public</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Youth Public</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Vocational/Professional Development Education</dct:educationLevel>\u000a  <dct:audience xsi:type=\"nsdl_dc:NSDLAudience\">Educator</dct:audience>\u000a  <dct:audience xsi:type=\"nsdl_dc:NSDLAudience\">General Public</dct:audience>\u000a  <dct:audience xsi:type=\"nsdl_dc:NSDLAudience\">Learner</dct:audience>\u000a  <dct:audience xsi:type=\"nsdl_dc:NSDLAudience\">Parent/Guardian</dct:audience>\u000a  <dct:audience xsi:type=\"nsdl_dc:NSDLAudience\">Professional/Practitioner</dct:audience>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Sound</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Audio/Visual</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Instructional Material</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Activity</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Lesson/Lesson Plan</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Movie/Animation</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Voice Recording</dc:type>\u000a  <dc:format xsi:type=\"dct:IMT\">audio</dc:format>\u000a  <dc:format xsi:type=\"dct:IMT\">text</dc:format>\u000a  <dct:accessRights xsi:type=\"nsdl_dc:NSDLAccess\">Free access</dct:accessRights>\u000a  <dc:subject>Geoscience</dc:subject>\u000a  <dc:language>English</dc:language>\u000a  <!--The National Science Digital Library (NSDL) has normalized this metadata record for use across its systems and services.-->\u000a</nsdl_dc:nsdl_dc>",
    "keys": ["Grade 2", "Grade 3", "Grade 1", "Grade 6", "Grade 7", "Grade 4", "Grade 5", "Grade 8", "Earthquakes", "Middle School Programming", "Early Elementary", "Upper Elementary", "Elementary School Programming", "Earth Science", "Informal Education", "Middle School", "Volcanoes", "Elementary School", "English", "podcast", "General Public", "Youth Public", "ncs-NSDL-COLLECTION-000-003-111-989", "Beyond Penguins and Polar Bears: An Online Magazine for K-5 Teachers", "Vocational/Professional Development Education", "Geoscience"],
    "TOS": {
        "submission_attribution": "The National Science Digital Library",
        "submission_TOS": "http://nsdl.org/help/?pager=termsofuse"
    },
    "resource_data_type": "metadata",
    "payload_schema_locator": "http://ns.nsdl.org/nsdl_dc_v1.02/ http://ns.nsdl.org/schemas/nsdl_dc/nsdl_dc_v1.02.xsd",
    "payload_placement": "inline",
    "payload_schema": ["nsdl_dc"],
    "node_timestamp": "2011-11-01T03:15:07.027184Z",
    "digital_signature": {
        "key_location": ["http://pool.sks-keyservers.net:11371/pks/lookup?op=get&search=0xBFF13965146B1740", "https://keyserver2.pgp.com/vkd/DownloadKey.event?keyid=0xBFF13965146B1740"],
        "key_owner": "The National Science Digital Library <nsdlsupport@nsdl.ucar.edu>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000a96c8d4391ce7b4e74041100e2afca1b6ab7685e6d98c1b821dacf9dd18746dae\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.10 (GNU/Linux)\u000a\u000aiQIcBAEBAgAGBQJOr2QsAAoJEN3QUpzaJ39HW1kQAIg9703wl+aF46PehPqY3Did\u000aW/ojLVbJKlKtSas1vhonMvJCidNXRpQiYByTay5ZhHodLEC8atccSPRnNIhlOHJN\u000adM+F8N/ifnXT0tNYJANKnXbX7L6H6kUfQ+Wjb7V+nD0H1UWeWLGDt09/Vv76dC5p\u000ajdBvrj1FKK6ogRRblLkne4vSBfFCGZqIOVjzp8wlVBchLHVhOpIxtje532Aa/jim\u000aWUhxN3CxzWKUF7XdIUKTQRKxWimeJfebHe6D9ORyoih1tGLc9y8cPC6I0xMWan/p\u000a8WqXzvBWe1y9pNHWjveP+j93X8gQpJCc5KX98eIbM81RbGAgX4y0M9TNFTDG6SPP\u000azh8AAOtWrgIf2+IXodVVsqQTGnY+hRpvL2H8Cbszl91KjgkQ39REaMDTRejJ2u3l\u000azTgN2w0PznWy2RY83RlDJm5zO3frUivakbGVKudJEgtfrTVmtwV6b5HOI8e2H48o\u000a1kyxCRf82+w+9YXtxfpz5GozARDwNQftxIiX9okmwqrIEAGSJNpN0b9bCqKO8Cpo\u000aO1nYfEe7juCWfupLfGURoxJRm4YTcuSfz+bCVDrYnPnwNT/buFacbnm3WE+PbzvM\u000aCA+alRM+URU6+06n6J1sM6lv4oJgDby84quEB1qs6CFuE0MTH4sbPwWdUw9XyzAT\u000aspet+Wx3V2TqhvVC4ekO\u000a=dRph\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "create_timestamp": "2011-11-01T03:15:07.027184Z",
    "doc_version": "0.23.0",
    "active": true,
    "publishing_node": "d94cc48d93744cf88ba833c7f7a2c2b7",
    "doc_ID": "1",
    "identity": {
        "signer": "The National Science Digital Library <nsdlsupport@nsdl.ucar.edu>",
        "submitter": "SRI International on behalf of The National Science Digital Library",
        "submitter_type": "agent",
        "curator": "The National Science Digital Library"
    }
}, {
    "_id": "2",
    "_rev": "1-c670550f9c9abe41762e16c474363176",
    "doc_type": "resource_data",
    "resource_locator": "http://beyondpenguins.nsdl.org/issue/column.php?date=May2009&departmentid=professional&columnid=professional!podcast",
    "update_timestamp": "2011-11-01T03:15:05.567164Z",
    "resource_data": "<nsdl_dc:nsdl_dc xmlns:nsdl_dc=\"http://ns.nsdl.org/nsdl_dc_v1.02/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:dct=\"http://purl.org/dc/terms/\" xmlns:ieee=\"http://www.ieee.org/xsd/LOMv1p0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.openarchives.org/OAI/2.0/\" schemaVersion=\"1.02.020\" xsi:schemaLocation=\"http://ns.nsdl.org/nsdl_dc_v1.02/ http://ns.nsdl.org/schemas/nsdl_dc/nsdl_dc_v1.02.xsd\">\u000a  <dc:identifier xsi:type=\"dct:URI\">http://beyondpenguins.nsdl.org/issue/column.php?date=May2009&amp;departmentid=professional&amp;columnid=professional!podcast</dc:identifier>\u000a  <dc:title>Deep Sea Thinking: Exploring the World's Ocean (Beyond Penguins and Polar Bears Podcast Episode 6)</dc:title>\u000a  <dc:description>This article describes and links to a podcast episode in which Dr. Chris Massell Symons, researcher at the Scripps Institution of Oceanography, shares how scientists are exploring the depths to uncover their secrets. The podcast also includes a song suitable for teaching elementary students about the Earth's ocean system. The article also includes information and links about using podcasts in elementary classrooms and links to the NOAA Acoustic Monitoring Program for marine mammals.</dc:description>\u000a  <dc:subject>Oceans</dc:subject>\u000a  <dc:subject>Marine Mammals</dc:subject>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S1002BDE</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S1023464</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S1007274</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100025D</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S1025973</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100AD5D</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S1007B0C</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100780F</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100257B</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100BE36</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100ABE0</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S10195BB</dct:conformsTo>\u000a  <dc:creator>Robert Payo</dc:creator>\u000a  <dc:creator>Stephanie Chasteen</dc:creator>\u000a  <dc:creator>Christina Massell Symons</dc:creator>\u000a  <dc:creator>Scipps Institution of Oceanography</dc:creator>\u000a  <dc:rights>Copyright The Ohio State University May 2009</dc:rights>\u000a  <dct:license xsi:type=\"dct:URI\">http://creativecommons.org/licenses/by-sa/3.0/</dct:license>\u000a  <dct:license xsi:type=\"dct:URI\">http://beyondpenguins.nsdl.org/information.php?topic=use</dct:license>\u000a  <dct:license>This document is licensed under a Creative Commons Attribution-Share Alike 3.0 Unported United States License.</dct:license>\u000a  <dct:isPartOf xsi:type=\"dct:URI\">http://beyondpenguins.nsdl.org/issue/index.php?date=May2009</dct:isPartOf>\u000a  <dct:isPartOf>Beyond Penguins and Polar Bears Issue 14: Polar Oceans (May 2009)</dct:isPartOf>\u000a  <dc:identifier xsi:type=\"nsdl_dc:ResourceHandle\">hdl:2200/20090430173733432T</dc:identifier>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Elementary School</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Early Elementary</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Kindergarten</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 1</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 2</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Upper Elementary</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 3</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 4</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 5</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Middle School</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 6</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 7</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 8</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">High School</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 9</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 10</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 11</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 12</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Vocational/Professional Development Education</dct:educationLevel>\u000a  <dct:audience xsi:type=\"nsdl_dc:NSDLAudience\">Educator</dct:audience>\u000a  <dc:type xsi:type=\"dct:DCMIType\">Text</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Instructional Material</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Reference Material</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Article</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Audio/Visual</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Movie/Animation</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Sound</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Voice Recording</dc:type>\u000a  <dc:format xsi:type=\"dct:IMT\">audio</dc:format>\u000a  <dc:format xsi:type=\"dct:IMT\">text/html</dc:format>\u000a  <dc:format xsi:type=\"dct:IMT\">text</dc:format>\u000a  <dc:format xsi:type=\"dct:IMT\">video</dc:format>\u000a  <dct:accessRights xsi:type=\"nsdl_dc:NSDLAccess\">Free access</dct:accessRights>\u000a  <dc:subject>Geoscience</dc:subject>\u000a  <dc:subject>Life Science</dc:subject>\u000a  <dc:language>English</dc:language>\u000a  <!--The National Science Digital Library (NSDL) has normalized this metadata record for use across its systems and services.-->\u000a</nsdl_dc:nsdl_dc>",
    "keys": ["Grade 2", "Grade 3", "Grade 1", "Grade 6", "Grade 7", "Grade 4", "Grade 5", "Grade 8", "Grade 9", "Kindergarten", "Early Elementary", "Upper Elementary", "Marine Mammals", "Oceans", "Grade 10", "Grade 11", "Grade 12", "Life Science", "Middle School", "Elementary School", "English", "ncs-NSDL-COLLECTION-000-003-111-989", "Beyond Penguins and Polar Bears: An Online Magazine for K-5 Teachers", "High School", "Vocational/Professional Development Education", "Geoscience"],
    "TOS": {
        "submission_attribution": "The National Science Digital Library",
        "submission_TOS": "http://nsdl.org/help/?pager=termsofuse"
    },
    "resource_data_type": "metadata",
    "payload_schema_locator": "http://ns.nsdl.org/nsdl_dc_v1.02/ http://ns.nsdl.org/schemas/nsdl_dc/nsdl_dc_v1.02.xsd",
    "payload_placement": "inline",
    "payload_schema": ["nsdl_dc"],
    "node_timestamp": "2011-11-01T03:15:05.567164Z",
    "digital_signature": {
        "key_location": ["http://pool.sks-keyservers.net:11371/pks/lookup?op=get&search=0xBFF13965146B1740", "https://keyserver2.pgp.com/vkd/DownloadKey.event?keyid=0xBFF13965146B1740"],
        "key_owner": "The National Science Digital Library <nsdlsupport@nsdl.ucar.edu>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000aeee03e9c5e4a115a511392f5042f14a37a48f2a00b53317cb2e06b4110c9abf2\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.10 (GNU/Linux)\u000a\u000aiQIcBAEBAgAGBQJOr2QrAAoJEN3QUpzaJ39HifYP/25n2iuwWBLn2WkDAb3dTzMt\u000aQ5v84w4CAN+zZPFiN1gGtj7QdhRwaUK1jGwjPJFBZKOGjuUYfIK7bCMY8YG2B/Ef\u000a8oJQK/aGG+mH/+vq+fGkB34KWr9txxGzCa15W8ZjmLJJYNtgrehB+HxSKzHyNnNX\u000asrbWCblTPAfSqEz/31rXy/1rA308F8er4G08DgAjeTJwscVZo4Y8aYV5+YZhk65z\u000aSaC3Zp4Dte+G07t1D/ganFtV3eFv2sVft6NOhKMPNwUyfUIWppdA+N9S/yJM/9Sk\u000at5cWX1h2bwfVM8cfdAyWxrcI0oL92yPLTbrtPzpNEzl2tKP65lD2KwoySA/XI94s\u000aMjfnvV1cNnbVyq98SgTOQqK4R6vW9t97WJRmgEH5cdVbLg2cTF3Vjv4nrflyOAQa\u000aUiRBbyeC9DTDs4UVb9zUGei/Vz+3QupoLpKpNUO5AiaI38SMgL28jLFXmkIoFzRh\u000aRv8u2DFwsUG9u7wR5mA2nayjW3gdwCPTOp1iPK59R//IcfnL3upqr0vZlA5oxTvo\u000a5ExRlZVRwl1DdbARWbJmN4WrC04u9lSbLO42iR2fIN7rl5BGb4rd5ZO9i3R4SYTa\u000a791+w2doWkoLr9/KwflmBvhqukHNroPFC70GLt0Z9ADJ0cPY3vsdOR4veC35F+2n\u000av2dW9pLqD4JovfV00c4J\u000a=RABN\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "create_timestamp": "2011-11-01T03:15:05.567164Z",
    "doc_version": "0.23.0",
    "active": true,
    "publishing_node": "d94cc48d93744cf88ba833c7f7a2c2b7",
    "doc_ID": "2",
    "identity": {
        "signer": "The National Science Digital Library <nsdlsupport@nsdl.ucar.edu>",
        "submitter": "SRI International on behalf of The National Science Digital Library",
        "submitter_type": "agent",
        "curator": "The National Science Digital Library"
    }
}, {
    "_id": "3",
    "_rev": "1-450647fb4f38bbc4a5511548a4e178f2",
    "doc_type": "resource_data",
    "resource_locator": "http://onramp.nsdl.org/eserv/onramp:1472/Where_are_the_volcanoes.pdf",
    "update_timestamp": "2011-11-01T03:15:01.876003Z",
    "resource_data": "<nsdl_dc:nsdl_dc xmlns:nsdl_dc=\"http://ns.nsdl.org/nsdl_dc_v1.02/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:dct=\"http://purl.org/dc/terms/\" xmlns:ieee=\"http://www.ieee.org/xsd/LOMv1p0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.openarchives.org/OAI/2.0/\" schemaVersion=\"1.02.020\" xsi:schemaLocation=\"http://ns.nsdl.org/nsdl_dc_v1.02/ http://ns.nsdl.org/schemas/nsdl_dc/nsdl_dc_v1.02.xsd\">\u000a  <dc:identifier xsi:type=\"dct:URI\">http://onramp.nsdl.org/eserv/onramp:1472/Where_are_the_volcanoes.pdf</dc:identifier>\u000a  <dc:title>Where are the Volcanoes?</dc:title>\u000a  <dc:description>This formative assessment item discusses common misconceptions about volcano location around the world. Resources include background and content information as well as alignment to the National Science Education Standards. The probe could easily be modified to be used with a study of earthquakes instead of volcanoes. Teachers can access other resources including facts about volcanoes and lesson ideas.</dc:description>\u000a  <dc:subject>Earth and space science</dc:subject>\u000a  <dc:subject>Earth processes</dc:subject>\u000a  <dc:subject>Volcanoes</dc:subject>\u000a  <dc:subject>Education Issues</dc:subject>\u000a  <dc:subject>Assessment of students</dc:subject>\u000a  <dc:subject>Misconceptions</dc:subject>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100025D</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S101A58E</dct:conformsTo>\u000a  <dc:creator>Jessica Fries-Gaither</dc:creator>\u000a  <dc:publisher>The Ohio State University</dc:publisher>\u000a  <dct:rightsHolder>The Ohio State University</dct:rightsHolder>\u000a  <dct:license xsi:type=\"dct:URI\">http://creativecommons.org/licenses/by-sa/3.0/</dct:license>\u000a  <dct:license>Licensed under a Creative Commons Attribution-Share Alike 3.0 Unported License.</dct:license>\u000a  <dct:isPartOf xsi:type=\"dct:URI\">http://beyondpenguins.nsdl.org/issue/column.php?date=December2008&amp;departmentid=professional&amp;columnid=professional!misconceptions</dct:isPartOf>\u000a  <dct:isPartOf>Beyond Penguins and Polar Bears Issue 9: Earth&#8217;s Changing Surface</dct:isPartOf>\u000a  <dct:dateCopyrighted xsi:type=\"dct:W3CDTF\">2008-12</dct:dateCopyrighted>\u000a  <dc:identifier xsi:type=\"nsdl_dc:ResourceHandle\">hdl:2200/20091015144206155T</dc:identifier>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Elementary School</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Early Elementary</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Kindergarten</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 1</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 2</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Upper Elementary</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 3</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 4</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 5</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Vocational/Professional Development Education</dct:educationLevel>\u000a  <dct:audience xsi:type=\"nsdl_dc:NSDLAudience\">Educator</dct:audience>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Assessment Material</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Instructional Material</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Instructor Guide/Manual</dc:type>\u000a  <dc:format xsi:type=\"dct:IMT\">text</dc:format>\u000a  <dc:format xsi:type=\"dct:IMT\">text/html</dc:format>\u000a  <dct:accessRights xsi:type=\"nsdl_dc:NSDLAccess\">Free access</dct:accessRights>\u000a  <dc:subject>Geoscience</dc:subject>\u000a  <dc:language>English</dc:language>\u000a  <!--The National Science Digital Library (NSDL) has normalized this metadata record for use across its systems and services.-->\u000a</nsdl_dc:nsdl_dc>",
    "keys": ["Grade 2", "Early Elementary", "Education Issues", "Grade 1", "Assessment of students", "Upper Elementary", "Volcanoes", "Beyond Penguins and Polar Bears: An Online Magazine for K-5 Teachers", "Grade 4", "Grade 5", "Earth and space science", "Earth processes", "Kindergarten", "Elementary School", "Grade 3", "ncs-NSDL-COLLECTION-000-003-111-989", "Vocational/Professional Development Education", "English", "Misconceptions", "Geoscience"],
    "TOS": {
        "submission_attribution": "The National Science Digital Library",
        "submission_TOS": "http://nsdl.org/help/?pager=termsofuse"
    },
    "resource_data_type": "metadata",
    "payload_schema_locator": "http://ns.nsdl.org/nsdl_dc_v1.02/ http://ns.nsdl.org/schemas/nsdl_dc/nsdl_dc_v1.02.xsd",
    "payload_placement": "inline",
    "payload_schema": ["nsdl_dc"],
    "node_timestamp": "2011-11-01T03:15:01.876003Z",
    "digital_signature": {
        "key_location": ["http://pool.sks-keyservers.net:11371/pks/lookup?op=get&search=0xBFF13965146B1740", "https://keyserver2.pgp.com/vkd/DownloadKey.event?keyid=0xBFF13965146B1740"],
        "key_owner": "The National Science Digital Library <nsdlsupport@nsdl.ucar.edu>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000a9eb1e53088a82d4d5be3ba31acf915defe67897d29d2c18b4ad8d109d2ca81f8\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.10 (GNU/Linux)\u000a\u000aiQIcBAEBAgAGBQJOr2QpAAoJEN3QUpzaJ39H+s0P/0RgDAw9OjObzKouC2PYyxEl\u000a4Q1uIjSPILc++Kwyc25pACo13knofK3XKIvfH/iQR9E4D93xLPEKRGa99aI6NxmU\u000a8PRMXfvszl3bMELgYD//U+eF1w9vrelEWJI4yoHTU2oE7EpKoRGrD4gwSHrwSMVO\u000ayfnLmj6e09h1rHg3fDDDdtPPE+9e3Gvhse7c0IWFmKGbRYVY4HUkGqxg1qYdP6jC\u000at2+rQFCt7PCJHrEwttYUsrH8g9FYzzBqB2Wzy/7fKRu/umDeemwJjxgXruOSlW3B\u000aDRwN2iv+KUAW5c69iReXku8qx85pX+Zaw3WtWUbwc5SjsQfeD1smuOpFuk3O4b5Q\u000atd8b3hw4aw/2iLyOMXqeoc5BZePw6m+OARCUFzOnLLlPFYksUQUFRzhH+rYQNxRl\u000aI/fr1sRGpchup9E0maI/jVLYhipkzTTm+NTrgPPLJMaYDHK4R0DmDr+xFU1SlWNj\u000aOngyg1IHDxYcGGjwYQ+tXOTS6t0oUWS4zC62ne+VDZrQEkRGELc3kzAtwvIai7t0\u000aVcByZKTBfWy38PvcUyF0sGGpEMZ8y6TLK04vAgR6dz5ZsBSqDwnkmkjhJAGxvRbc\u000aOiADCvknmqARSE6JYd2NPKi6tihkUiA4Y9KsINsgDVj4tOn7Fsi7C7vls6bPk1Qg\u000aaZefDeWWO6BMcNa9B3KJ\u000a=h6LQ\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "create_timestamp": "2011-11-01T03:15:01.876003Z",
    "doc_version": "0.23.0",
    "active": true,
    "publishing_node": "d94cc48d93744cf88ba833c7f7a2c2b7",
    "doc_ID": "3",
    "identity": {
        "signer": "The National Science Digital Library <nsdlsupport@nsdl.ucar.edu>",
        "submitter": "SRI International on behalf of The National Science Digital Library",
        "submitter_type": "agent",
        "curator": "The National Science Digital Library"
    }
}, {
    "_id": "4",
    "_rev": "1-b897bf660755adc7c856ef93f69f64d7",
    "doc_type": "resource_data",
    "resource_locator": "http://onramp.nsdl.org/eserv/onramp:17105/Glaciers_and_Rocks.pdf",
    "update_timestamp": "2011-11-01T03:15:04.947190Z",
    "resource_data": "<nsdl_dc:nsdl_dc xmlns:nsdl_dc=\"http://ns.nsdl.org/nsdl_dc_v1.02/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:dct=\"http://purl.org/dc/terms/\" xmlns:ieee=\"http://www.ieee.org/xsd/LOMv1p0\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.openarchives.org/OAI/2.0/\" schemaVersion=\"1.02.020\" xsi:schemaLocation=\"http://ns.nsdl.org/nsdl_dc_v1.02/ http://ns.nsdl.org/schemas/nsdl_dc/nsdl_dc_v1.02.xsd\">\u000a  <dc:identifier xsi:type=\"dct:URI\">http://onramp.nsdl.org/eserv/onramp:17105/Glaciers_and_Rocks.pdf</dc:identifier>\u000a  <dc:title>Glaciers and Rocks</dc:title>\u000a  <dc:description>This formative assessment item uncovers students' ideas about glacial erosion and how glaciers transport rocks and other sediment. The assessment is aligned with the National Science Education Standards. It contains instructional suggestions as well as links to other helpful resources dealing with glaciers and glacial movement.</dc:description>\u000a  <dc:subject>Earth and Space Science</dc:subject>\u000a  <dc:subject>Earth processes</dc:subject>\u000a  <dc:subject>Erosion</dc:subject>\u000a  <dc:subject>Weathering</dc:subject>\u000a  <dc:subject>Assessment of Students</dc:subject>\u000a  <dc:subject>Misconceptions</dc:subject>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100025D</dct:conformsTo>\u000a  <dct:conformsTo xsi:type=\"dct:URI\">http://purl.org/ASN/resources/S100BE36</dct:conformsTo>\u000a  <dc:creator>Jessica Fries-Gaither</dc:creator>\u000a  <dc:publisher>The Ohio State University</dc:publisher>\u000a  <dct:rightsHolder>The Ohio State University</dct:rightsHolder>\u000a  <dct:license xsi:type=\"dct:URI\">http://creativecommons.org/licenses/by-sa/3.0/</dct:license>\u000a  <dct:license>Licensed under a Creative Commons Attribution-Share Alike 3.0 Unported License.</dct:license>\u000a  <dct:isPartOf xsi:type=\"dct:URI\">http://beyondpenguins.nsdl.org/issue/column.php?date=August2009&amp;departmentid=professional&amp;columnid=professional!misconceptions</dct:isPartOf>\u000a  <dct:isPartOf>Beyond Penguins and Polar Bears Issue 15: Icebergs and Glaciers</dct:isPartOf>\u000a  <dct:dateCopyrighted xsi:type=\"dct:W3CDTF\">2009-08</dct:dateCopyrighted>\u000a  <dc:identifier xsi:type=\"nsdl_dc:ResourceHandle\">hdl:2200/20091021133646020T</dc:identifier>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Elementary School</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Early Elementary</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Kindergarten</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 1</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 2</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Upper Elementary</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 3</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 4</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Grade 5</dct:educationLevel>\u000a  <dct:educationLevel xsi:type=\"nsdl_dc:NSDLEdLevel\">Vocational/Professional Development Education</dct:educationLevel>\u000a  <dct:audience xsi:type=\"nsdl_dc:NSDLAudience\">Educator</dct:audience>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Assessment Material</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Instructional Material</dc:type>\u000a  <dc:type xsi:type=\"nsdl_dc:NSDLType\">Instructor Guide/Manual</dc:type>\u000a  <dc:format xsi:type=\"dct:IMT\">text</dc:format>\u000a  <dc:format xsi:type=\"dct:IMT\">text/html</dc:format>\u000a  <dct:accessRights xsi:type=\"nsdl_dc:NSDLAccess\">Free access</dct:accessRights>\u000a  <dc:subject>Geoscience</dc:subject>\u000a  <dc:language>English</dc:language>\u000a  <!--The National Science Digital Library (NSDL) has normalized this metadata record for use across its systems and services.-->\u000a</nsdl_dc:nsdl_dc>",
    "keys": ["Grade 2", "Early Elementary", "Grade 1", "Assessment of Students", "Upper Elementary", "Grade 3", "Beyond Penguins and Polar Bears: An Online Magazine for K-5 Teachers", "Grade 4", "Grade 5", "Earth and Space Science", "Earth processes", "Kindergarten", "Elementary School", "ncs-NSDL-COLLECTION-000-003-111-989", "Vocational/Professional Development Education", "English", "Misconceptions", "Erosion", "Geoscience", "Weathering"],
    "TOS": {
        "submission_attribution": "The National Science Digital Library",
        "submission_TOS": "http://nsdl.org/help/?pager=termsofuse"
    },
    "resource_data_type": "metadata",
    "payload_schema_locator": "http://ns.nsdl.org/nsdl_dc_v1.02/ http://ns.nsdl.org/schemas/nsdl_dc/nsdl_dc_v1.02.xsd",
    "payload_placement": "inline",
    "payload_schema": ["nsdl_dc"],
    "node_timestamp": "2011-11-01T03:15:04.947190Z",
    "digital_signature": {
        "key_location": ["http://pool.sks-keyservers.net:11371/pks/lookup?op=get&search=0xBFF13965146B1740", "https://keyserver2.pgp.com/vkd/DownloadKey.event?keyid=0xBFF13965146B1740"],
        "key_owner": "The National Science Digital Library <nsdlsupport@nsdl.ucar.edu>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000a5798130af7d938b74bb6b2a43070e4850302fc1b0102ac5fbc1cbeaa79bc9d74\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.10 (GNU/Linux)\u000a\u000aiQIcBAEBAgAGBQJOr2QrAAoJEN3QUpzaJ39HCo8P/1pwn9hmswSI6Ybz9XwzynGI\u000aUuDlQ/2LbOuXA9cbQQsgJqgCV7nR8DHYmymR9v1ZFnzDIykxD+b0WeJa3n62IpLX\u000amirLBL34Nc/JjOhiCkb9wvQKzRqaLrEwOgmM8nHzKeTpMr8qN//UXLaTvdl42Hbs\u000aedHBOjdX+LksU57wihjHb0+pv8P/P7KZ0wlMHEBxeGn1Bd3BKM/rHdTbV2EjYLYt\u000ap+vVsq0moCDyKDVNCqCFjlRrlVKCSd23RHVhaiP+MEcO04KRdniXiOdJ6P936SF/\u000aXRPhKgUfjA0IYLzDSRLtkfjbQLXb7Pxi4ncKOPjqUjYYEMO0/BynjiVYsMAloYNr\u000afHBq0OMdtbp+S9jyrjuXtmGJKqZxHIxXh5eNNoJeJoc1ewaUdAyesde0aUNt4n7s\u000aM/XMz73Vu/iGEKntK6zZrQ/FwEpu2wQbkN+ldxACeLqD7NYGVFKQqiPdXbR97Gow\u000akl6tX0Z4Q6f9g7QYXss87M0J5teA2d0SM+4OwpN1+WhiKFFXTN2RSg9K7tew6Amh\u000aWUBHmLdPg5RqBbPUF6oxPrfbEyQa4bhn5SNw9KOefSPdtanfDIQe1INb7ljNvOnd\u000aD9qjjtu41Z3Y9u8QU11kXZ+hHULLCQdtxwN/vBa2vOHkzyC1OzcEAyJYrvl+5lbh\u000aA1vIpXo96JaUpchTNGcN\u000a=3Nop\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "create_timestamp": "2011-11-01T03:15:04.947190Z",
    "doc_version": "0.23.0",
    "active": true,
    "publishing_node": "d94cc48d93744cf88ba833c7f7a2c2b7",
    "doc_ID": "4",
    "identity": {
        "signer": "The National Science Digital Library <nsdlsupport@nsdl.ucar.edu>",
        "submitter": "SRI International on behalf of The National Science Digital Library",
        "submitter_type": "agent",
        "curator": "The National Science Digital Library"
    }
}, {
    "_id": "00065c80ee6d49239b89560200049932",
    "_rev": "1-11ef944f56e0355bb15c5bca6f896488",
    "resource_data": {
        "activity": {
            "verb": {
                "action": "rated",
                "date": "2011-12-01/2011-12-31",
                "measure": {
                    "scaleMin": 0,
                    "sampleSize": 51,
                    "scaleMax": 3,
                    "value": "2.0"
                }
            },
            "related": [{
                "object": {
                    "type": "OER Rubric",
                    "description": "Utility of Materials Designed to Support Teaching"
                }
            }],
            "object": "http://www.oercommons.org/courses/asa-congruent-triangles"
        }
    },
    "keys": ["lr-test-data"],
    "TOS": {
        "submission_TOS": "http://www.learningregistry.org/tos/cc0/v0-5/"
    },
    "payload_placement": "inline",
    "node_timestamp": "2012-01-01T13:02:04.314847Z",
    "create_timestamp": "2012-01-01T13:02:04.314847Z",
    "update_timestamp": "2012-01-01T13:02:04.314847Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.oercommons.org/courses/asa-congruent-triangles",
    "identity": {
        "submitter": "OER Commons",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://www.oercommons.org/public-key.txt"],
        "key_owner": "OER Commons <info@oercommons.org>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\nbf24d13057dbf98f403904b000f6c7f8407c548bcbfd21b718d095c1aa91d752\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v1.4.10 (GNU/Linux)\n\niQEcBAEBAgAGBQJPAFlEAAoJEKPVkXeiZE8+vtUH/AjRrjcDLTuo6mhpSaBx7i86\nvLNZzruGG3Xb8V3eZ4qzgx5lKZ0Syge4TU+7LrIkTbA9K9Or0qlurpSNlCJ/6y34\nZKdMRIteR1/7lTR8OH4c7f3YuLNnaRrANYW/h48yR3iazAPMh9i+InRKsgQencUw\nib1y/pmBtqvOGWU0YlPReuOvLGfbfw++HllxLseblAsbQ37BamuZN5EHNw7rY8M3\niW88GnTTRFx+7Z419c5jr/yEf4h6CujBzDqWMmDmTvib6/tGUamYcm3nQ1DYm3xz\nlFmJ48q9fVngQcIwauWI5Jsc/JW9OlHrwYIP7xMK3RE9ZusEM2SkKImeG3fe+YU=\n=lv8R\n-----END PGP SIGNATURE-----\n"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "00065c80ee6d49239b89560200049932"
}, {
    "_id": "00518e84fffa4d10b34b0e36c9c35914",
    "_rev": "1-885babb21e7d0b73de36e2762d43edf2",
    "resource_data": {
        "activity": {
            "verb": {
                "action": "rated",
                "date": "2011-12-01/2011-12-31",
                "measure": {
                    "scaleMin": 0,
                    "sampleSize": 51,
                    "scaleMax": 3,
                    "value": "3.0"
                }
            },
            "related": [{
                "object": {
                    "type": "Common Core Standard",
                    "description": "CC.7.SP.8"
                }
            }],
            "object": "http://www.oercommons.org/courses/what-s-the-chance-concepts-of-probability"
        }
    },
    "keys": ["lr-test-data"],
    "TOS": {
        "submission_TOS": "http://www.learningregistry.org/tos/cc0/v0-5/"
    },
    "payload_placement": "inline",
    "node_timestamp": "2012-01-01T13:01:20.814914Z",
    "create_timestamp": "2012-01-01T13:01:20.814914Z",
    "update_timestamp": "2012-01-01T13:01:20.814914Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.oercommons.org/courses/what-s-the-chance-concepts-of-probability",
    "identity": {
        "submitter": "OER Commons",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://www.oercommons.org/public-key.txt"],
        "key_owner": "OER Commons <info@oercommons.org>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\nb546ff773247815a599d26622a311cfbb2cee7478f12d17c22c971e760ace7d0\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v1.4.10 (GNU/Linux)\n\niQEcBAEBAgAGBQJPAFkYAAoJEKPVkXeiZE8+wPIIAKNe1ORNVTIH967S9nKLF24n\njABP8Rqv9wtEeZ6fh0oYUplzcD2/fRRK+0oCr17LS13X7nOvQr2ywvSVcrgB+qBV\nux6opPi6Poh05iHK/Abw7pADBIlhXtMsqd4sTki07wVnFAsTkHNTsLIjES9tj7p0\nvc1dgDJ43L700EWa5Ly63kYioBwoPsEl/lJL01U85h0FFcgMRWfMiNh62HKQ0OnL\n48lMJrCmXEa116+haRrsu/hMDsyD7q8Y/T/BCuAC0pGqq9CnCHVuKhrQS5lHDhTp\npVnl1QeG6ejnUvQt+ZGi4uCZK7WmXYVTA3NsHC+z18aIik0EDczRaO72pd1HPn0=\n=zjpa\n-----END PGP SIGNATURE-----\n"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "00518e84fffa4d10b34b0e36c9c35914"
}, {
    "_id": "0074b534cb9e418c9ac8f90d081302d5",
    "_rev": "1-db7456a6c6f9af84f86d1d6dba317f80",
    "resource_data": {
        "activity": {
            "verb": {
                "action": "rated",
                "date": "2011-10-01/2011-10-31",
                "measure": {
                    "scaleMin": 0,
                    "sampleSize": 91,
                    "scaleMax": 3,
                    "value": "2.0"
                }
            },
            "related": [{
                "object": {
                    "type": "Common Core Standard",
                    "description": "CC.3.MD.3"
                }
            }],
            "object": "http://www.oercommons.org/courses/amazing-bean-races"
        }
    },
    "keys": ["lr-test-data"],
    "TOS": {
        "submission_TOS": "http://www.learningregistry.org/tos/cc0/v0-5/"
    },
    "payload_placement": "inline",
    "node_timestamp": "2011-11-08T13:00:18.486289Z",
    "create_timestamp": "2011-11-08T11:31:43.579958Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.oercommons.org/courses/amazing-bean-races",
    "identity": {
        "submitter": "OER Commons",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-11-08T11:31:43.579958Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://www.oercommons.org/public-key.txt"],
        "key_owner": "OER Commons <info@oercommons.org>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\n96e4b7f9b55f22742e5e8b23d7e869934e1cbf72dde44275a750f0776e6355d5\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v1.4.10 (GNU/Linux)\n\niQEcBAEBAgAGBQJOuRK9AAoJEKPVkXeiZE8+w0UH/3RNIhDqZi9Ubz1dkno0gb9S\nhAUaJma5VAaa3G48A/4uiBM4o/iLfskofvTbrDyrMKHVJTI0zxCugdmPwiA0wGFp\nBUgGj+gY/darRhyjaEbxub9h0T/Jy5pO2qvebONA5T9L9vRwmJslwd4jJXwpXhH/\nSjOCxLcn0vFB6l3lO+xuK2dVq4kfnxdYPlkypd5ETL5i+Vd4DdmzSwSUri6KYGd/\nCRauTnZhYZz1YO20bfbT8kIqMm7XIYcb4gKq0k9ynd10vciAFlLtlGojgihb4tPB\nj5VxW7SO3ed3ywbW1KzOtQiv4ZN5Xs48M1LW8svgYpftHHaLAMgwArsNXSESaCg=\n=5C6Q\n-----END PGP SIGNATURE-----\n"
    },
    "doc_version": "0.23.0",
    "doc_ID": "0074b534cb9e418c9ac8f90d081302d5"
}, {
    "_id": "0074f888e38148e48ea5a70018a33560",
    "_rev": "1-e6a3706a505f73fb6baf26e7278c37d9",
    "resource_data": {
        "activity": {
            "verb": {
                "action": "rated",
                "date": "2011-11-01/2011-11-30",
                "measure": {
                    "scaleMin": 0,
                    "sampleSize": 976,
                    "scaleMax": 3,
                    "value": "2.0"
                }
            },
            "related": [{
                "object": {
                    "type": "OER Rubric",
                    "description": "Quality of Explanation of the Subject Matter"
                }
            }],
            "object": "http://www.oercommons.org/courses/pre-algebra-simplifying-radicals"
        }
    },
    "keys": ["lr-test-data"],
    "TOS": {
        "submission_TOS": "http://www.learningregistry.org/tos/cc0/v0-5/"
    },
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:00:54.869099Z",
    "create_timestamp": "2011-12-01T13:06:48.875476Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.oercommons.org/courses/pre-algebra-simplifying-radicals",
    "identity": {
        "submitter": "OER Commons",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-01T13:06:48.875476Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://www.oercommons.org/public-key.txt"],
        "key_owner": "OER Commons <info@oercommons.org>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\n304dd252d4afef7b6a5d3e790e2139acbb4763181503e9b52b330a372b896aba\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v1.4.10 (GNU/Linux)\n\niQEcBAEBAgAGBQJO13t6AAoJEKPVkXeiZE8+jukH/RkF+X9Qq6D6+AjPdkWwbEWD\nl7QtoQd8nYLm8C7Yjq07SWFwtBD14DNHXeHCoGJ/goVGLAO8+e2Ga2ugAro+m7ha\nyVHpcNl0e1vvmVcZHbQpICuQi+/J38FwnhM9+iIa4C2Bl4JoDwFpw8P0XR0iMwan\nLhj5TXxij7qUaFwWIDN7cGWIUhKAx3DrZSMhogEXHm98deD//1mFHmze4sEW1unq\njvQmp9laNxHAf4kR/s0WoHWYOA3fY0rnye2VYiTYj8OMILwJMmyAIH+gz/hm6ThF\nyAVB520LOh4LM6VcLK7/E2bwEkyEhujWHUHMiYF6Jqist5BpWHaS8nKa6/oSH38=\n=0oxA\n-----END PGP SIGNATURE-----\n"
    },
    "doc_version": "0.23.0",
    "doc_ID": "0074f888e38148e48ea5a70018a33560"
}, {
    "_id": "00a3e85532a54abda8b817da4b0289a5",
    "_rev": "1-c4a6b24a99c44562b1a3e68b02c7253e",
    "resource_data": {
        "activity": {
            "verb": {
                "action": "rated",
                "date": "2011-12-01/2011-12-31",
                "measure": {
                    "scaleMin": 0,
                    "sampleSize": 51,
                    "scaleMax": 3,
                    "value": "1.0"
                }
            },
            "related": [{
                "object": {
                    "type": "Common Core Standard",
                    "description": "CC.7.RP.2"
                }
            }],
            "object": "http://www.oercommons.org/courses/the-numbers-behind-hunger-1"
        }
    },
    "keys": ["lr-test-data"],
    "TOS": {
        "submission_TOS": "http://www.learningregistry.org/tos/cc0/v0-5/"
    },
    "payload_placement": "inline",
    "node_timestamp": "2012-01-01T13:00:45.624647Z",
    "create_timestamp": "2012-01-01T13:00:45.624647Z",
    "update_timestamp": "2012-01-01T13:00:45.624647Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.oercommons.org/courses/the-numbers-behind-hunger-1",
    "identity": {
        "submitter": "OER Commons",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://www.oercommons.org/public-key.txt"],
        "key_owner": "OER Commons <info@oercommons.org>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\n22fc73fd9c09d195aaf85d06c686857392630ddc2283b299df48c53f247bd15b\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v1.4.10 (GNU/Linux)\n\niQEcBAEBAgAGBQJPAFj1AAoJEKPVkXeiZE8+FxMIAJn5BaLPmIJ/AJKO+/5egrxq\nOrCM90VBGg9L9Taq8LsPS87zcSIT3S+cbuhRAUrmY3WJoNmUTbkw7ICah5l8IR+n\nEkWSho3YY+p6zOgDuD16CjtVtAVTPoPfRkOkTFpWV4b3jOLoEkzCOY9kKvTxX9Kn\nsSkOs9tAUKDCry4DZG1vbO/UnORXAAyeM7HmoH2F3ZAVCqwbTU4uPrjOP4bSFxj7\nIcTz/wfxf/JGIBxT5sZuzXgdW5MVrPUZ/AMcg/2mMIeYvwscHyqJD9wOV518tMYX\nQtqLNGSmhwyH4keg9jzrhWK8PhNvSE5o87GZtrM0g5JFBezmwsmu/Os+/auk7bg=\n=n9Bh\n-----END PGP SIGNATURE-----\n"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "00a3e85532a54abda8b817da4b0289a5"
}, {
    "id": "a97909955603403aa4c07029a240adee",
    "key": "endorse",
    "value": null,
    "doc": {
        "_id": "a97909955603403aa4c07029a240adee",
        "_rev": "1-5f757ef77818d3c1c4fc09755b2213aa",
        "resource_data": {
            "activity": {
                "verb": {
                    "action": "endorse",
                    "content": "The Brokers of Expertise Standards Matchers group found at http://myboe.org/go/groups/standards_matchers was endorsed by the administrators of the Brokers of Expertise Learning Management System.",
                    "date": "2011-12-14"
                },
                "actor": {
                    "displayName": "Brokers of Expertise",
                    "id": "http://myboe.org",
                    "objectType": "LMS"
                },
                "object": {
                    "displayName": "Brokers of Expertise Standards Matchers",
                    "id": "http://myboe.org/go/groups/standards_matchers",
                    "objectType": "group"
                }
            }
        },
        "keys": ["lr-test-data", "endorsement", "standards alignment"],
        "TOS": {
            "submission_attribution": "Brokers of Expertise",
            "submission_TOS": "Copyright 2011 California Department of Education: CC-BY-3.0"
        },
        "payload_placement": "inline",
        "node_timestamp": "2011-12-21T06:02:06.730976Z",
        "create_timestamp": "2011-12-14T23:15:58.645883Z",
        "active": true,
        "publishing_node": "cad60ef7493246868f6394fa764397c3",
        "resource_locator": "http://myboe.org/go/groups/standards_matchers",
        "identity": {
            "signer": "Brokers of Expertise",
            "submitter": "Brokers of Expertise",
            "submitter_type": "agent"
        },
        "doc_type": "resource_data",
        "update_timestamp": "2011-12-14T23:15:58.645883Z",
        "resource_data_type": "assertion",
        "payload_schema": ["LR Paradata 1.0"],
        "digital_signature": {
            "key_location": ["http://keyserver.pgp.com/vkd/DownloadKey.event?keyid=0x7DA1E3E28AF74166"],
            "key_owner": "Brokers of Expertise <webmaster@myboe.org>",
            "signing_method": "LR-PGP.1.0",
            "signature": "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA1\n\n64a761a8941c4b1d5ecb8982e02d7bb42bc59d990b376b6870d95b0c15d44174\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v1.4.11 (Darwin)\nComment: GPGTools - http://gpgtools.org\n\niQEcBAEBAgAGBQJO6S4tAAoJEEUCJ7ZuexlnykkIAIRmr2j50fGrhb8GiGgtC33T\nP56d5Nu2Qe6MVX/K2K12uQxCqAurCYOOFNApY4I8vUuO7Uc1sW3n1m/ab7p/g0bC\n26rE4uaYz7pGtT/X0RTwMn57X/kUj5CMLzI8QnseXmhfGMCW+O/VxV2tkL7FV7z0\nBuQ3dW0G96FFru/6BqbrGcJAgndoKPknwIWUg9wU05f3VjLDmUhBzERBxMAdPM+m\ndv7PRt+e5mTFB4cvPEg8f3Fs6PNcG1YgDZhFdmODD3IspR0NtPM/ohf4D3JRk6EF\np46GDWHTiRymjN6PFls9QnUMEC9FcwQNnBT4iST9lBk/jM9LMlUOftH/sBCAw9Y=\n=qFKU\n-----END PGP SIGNATURE-----\n"
        },
        "doc_version": "0.23.0",
        "doc_ID": "a97909955603403aa4c07029a240adee"
    }
}, {
    "_id": "1c6c7ebcc46e4b2aa78919cf9b749505",
    "_rev": "1-d14c685c1c3aaa68718b5d0140a57ac6",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://www.teachersdomain.org/resource/eng06.sci.engin.design.rover/ was dragged by a teacher in BrainHoney",
            "verb": {
                "action": "dragged",
                "context": {
                    "objectType": "Syllabus Editor"
                }
            },
            "actor": {
                "description": ["BrainHoney"],
                "objectType": "teacher"
            },
            "object": {
                "id": "http://www.teachersdomain.org/resource/eng06.sci.engin.design.rover/"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T22:15:57.466322Z",
    "create_timestamp": "2011-12-14T22:15:57.466322Z",
    "update_timestamp": "2011-12-14T22:15:57.466322Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.teachersdomain.org/resource/eng06.sci.engin.design.rover/",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ab6b8e4e3471374a78e27f270e1a2d0d2c397ea3a8b03e93910a4233060f506a9\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SAGAAoJEMvWxuXktJT81boIAIn8y3fz8BoSHgYCSHgNSoow\u000alOYvswKz1TCavFBCjawjq/qoozLTZJPMZfniXO/M6sDOafoBxYDct2sNajLYnavj\u000a8K17qaO6F2EEyOlGzH+SjnpWas2k3gNBe4UCH+KWpMqE9Xde04RFCk3Te95dTV+7\u000anRrT+Nd74WswUjRzNNp+G/BD7pTt7M8LApTiq/SpKZ4U7UoeWdCGYIPh/Kv0qNJi\u000aLYrznbhjcvOJF4T4FcLY+Q6zEx12F5cHgglHOe600ebsx87Tq34IqVXzSC1tTxQg\u000aI3e2/bdub4YcHLwhDoypc1p/b6Q1uwfcQRlr03cfMQtFaftSG3zV9M9tH5t0l+o=\u000a=3TDw\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "1c6c7ebcc46e4b2aa78919cf9b749505"
}, {
    "_id": "956e8dcf74ee4767962a7f775a6ef8df",
    "_rev": "1-9390df83ae1aa41125ed2ae46879e680",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://www.teachersdomain.org/resource/eng06.sci.engin.design.rover/ was dragged by a teacher in BrainHoney",
            "verb": {
                "action": "dragged",
                "context": {
                    "objectType": "Syllabus Editor"
                }
            },
            "actor": {
                "description": ["BrainHoney"],
                "objectType": "teacher"
            },
            "object": {
                "id": "http://www.teachersdomain.org/resource/eng06.sci.engin.design.rover/"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:02:05.919579Z",
    "create_timestamp": "2011-12-14T21:56:20.800015Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.teachersdomain.org/resource/eng06.sci.engin.design.rover/",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-14T21:56:20.800015Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ab6b8e4e3471374a78e27f270e1a2d0d2c397ea3a8b03e93910a4233060f506a9\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG/MacGPG2 v2.0.17 (Darwin)\u000aComment: GPGTools - http://gpgtools.org\u000a\u000aiQEcBAEBAgAGBQJO6RuDAAoJEMvWxuXktJT8b8kH/jw7Pph8gR/iZsNebNtRtKHP\u000aWUr7Z1NY22len09vsY2G7OBz261YW9q9Y9SBDGlPBi0+OvFHNM7PTYTGyM0EjCLJ\u000asSHK+DmcHshuUUSmyUlsyou0+iuiONcwgB2UMoNeoo1lrh9OWpZ+ocuEw2Zr8DQr\u000a2on3TDaEKAo+8rQSAam5ukmoNu934xBEaB8SeV+IozXB33aqmq6toU9ikwMqEkwz\u000arRUKFr4DqOwKMmCgn6nx02XTCvA3Y/jNLNK0WVTJjawP2oExvVAdQSJgNwdzMpjX\u000azp5oHC5kVcRYBGVRI8RlU9dSE0+3V+bWHc7RpSZds1NJC1tSX97A6TPrZ2juzyw=\u000a=5wNL\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "doc_version": "0.23.0",
    "doc_ID": "956e8dcf74ee4767962a7f775a6ef8df"
}, {
    "_id": "e1cfcd0eb7e642eabb94398d37853c55",
    "_rev": "1-da21e14ce478cf45393d346903d4d1d4",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://www.teachersdomain.org/resource/eng06.sci.engin.design.rover/ was dragged by a teacher in BrainHoney",
            "verb": {
                "action": "dragged",
                "context": {
                    "objectType": "Syllabus Editor"
                }
            },
            "actor": {
                "description": ["BrainHoney"],
                "objectType": "teacher"
            },
            "object": {
                "id": "http://www.teachersdomain.org/resource/eng06.sci.engin.design.rover/"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:02:08.531293Z",
    "create_timestamp": "2011-12-14T21:49:12.881957Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.teachersdomain.org/resource/eng06.sci.engin.design.rover/",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-14T21:49:12.881957Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ab6b8e4e3471374a78e27f270e1a2d0d2c397ea3a8b03e93910a4233060f506a9\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG/MacGPG2 v2.0.17 (Darwin)\u000aComment: GPGTools - http://gpgtools.org\u000a\u000aiQEcBAEBAgAGBQJO6RnXAAoJEMvWxuXktJT8rjkIAJZVTKgUHQbO/YzVdExBiCPc\u000aDioi+nJDI5LXVQnrCoVhJXDoOBxf4c0x/azQ6RxMG0nhKeB52LPeRMzX/hG5Nz/7\u000aENGyhviTIKhozV0Fz40/4ySCJ8kexBuayCBiACr5vzxQLqtFoeV3o4J3oqqFwtNM\u000aNYmUfZfx0l1LrBBz0tEck6eGWAp2dtUF9lUBHvu27UjNQDN7k+7/US02rHbyEQOL\u000aGQRuVLCXIQLClIcuPu5g1L9p0SLUnoaAieDCsjYXtFRL5MA58Iu0/mutz4o3+w6N\u000aYI67aVsYXC0OF/EMEDe7rt5WSb5ERDFbUKowXJGBbuxidQ/I8Jecx8IKhtdNIAM=\u000a=vkfz\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "doc_version": "0.23.0",
    "doc_ID": "e1cfcd0eb7e642eabb94398d37853c55"
}, {
    "_id": "2791dbcbca874579ac948895effbac36",
    "_rev": "1-bc37bc99327c5065edd6094ba2015649",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://www.shodor.org/interactivate/activities/AlgebraQuiz/ was previewed by a teacher in BrainHoney",
            "verb": {
                "action": "previewed",
                "context": {
                    "objectType": "Syllabus Editor"
                }
            },
            "actor": {
                "description": ["BrainHoney"],
                "objectType": "teacher"
            },
            "object": {
                "id": "http://www.shodor.org/interactivate/activities/AlgebraQuiz/"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:01:52.219848Z",
    "create_timestamp": "2011-12-14T22:17:58.040494Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.shodor.org/interactivate/activities/AlgebraQuiz/",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-14T22:17:58.040494Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000a23b5ad381a7d5cc393038696be8d883595998c2fdb1e9cdc5c989832da43d1db\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SCAAAoJEMvWxuXktJT81pYH/iLer3PA8rYgMPHKO4WLs/r6\u000aIr3+eYGLpv1thA3lxmcY9a60eOTIwy0gTt6VomYEqysKnm3G9BKM3cAiNnnNV81J\u000aAYkNwhNGKzI+9qEXYun/TF10STUGm3STdCCnEbMttBCoP9ADtaO66wsAh5d8B/k9\u000aldMahDiBdMZGzCSbnmFLTqrppDLDogdK4HRy8bWDoGJgMqnOHn7sRfMSfANEc0Fr\u000a44QkciX6TgKbQJHDCUMyeUopGMWfxW9VX0m7VprQ/7idKtSPU0+gAVTPwee0QL22\u000ajuDunon3wsEe4SYp14mtwS3PfaH2ZWad/szO6bnaRwG7LiPTGySYhgNkPqB06Ms=\u000a=+PD+\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "doc_version": "0.23.0",
    "doc_ID": "2791dbcbca874579ac948895effbac36"
}, {
    "_id": "051f8b21f5984842887dd17399dfa6b2",
    "_rev": "1-d45c1d27a0c097c4fd6fed04bb09fa2c",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T23:01:23.430157Z",
    "create_timestamp": "2011-12-14T23:01:23.430157Z",
    "update_timestamp": "2011-12-14T23:01:23.430157Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ae79936486101192a56a65680af6ae86b271505c64b48e8ff7a0fb27c9ef0201b\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SqtAAoJEMvWxuXktJT8Rc4H/0xmg6mMjwMN4ur1rKopRG6f\u000agwbl4hcs5XYXzpjP7BfAmftD0rF2rFxY6JzrTox4h4njiLz1nXRQSTquoxVUhecr\u000aGRPOtpuwKkYTJiYOGeuSdduN4/+BBUy42jqSrbCEQLlqU/2BaifQJJF+pxxYvhoU\u000a3gqbL7IytOIWAinIs33rBH8CqQMag6Lk4AUBuvzv/qOZK3ER5kpLIa73jg9v4jln\u000aqbdjHKj0mZTTRj0oNmvvZaOp5SVPBi1mieJ0Eb7qEICE+QS6zowV2E6FDfYJ7HHR\u000a/kzis6JIfOWyIvOCqRBYZlafe/jHc9Z32Ov7fvmks0gGtmgcws1jAp/r08gYllI=\u000a=OAXr\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "051f8b21f5984842887dd17399dfa6b2"
}, {
    "_id": "0e7d123e915a45cc9f30a81546957605",
    "_rev": "1-f25ca00b21a9fb1d9177926497ed6455",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://learn.genetics.utah.edu/content/begin/cells/scale/ was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://learn.genetics.utah.edu/content/begin/cells/scale/"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T22:24:10.316528Z",
    "create_timestamp": "2011-12-14T22:24:10.316528Z",
    "update_timestamp": "2011-12-14T22:24:10.316528Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://learn.genetics.utah.edu/content/begin/cells/scale/",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ae2f3def23c4eb1eafcc63109dab4f61cc96a29f2e0180782f6ffac2946371efc\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SH0AAoJEMvWxuXktJT8sEgH/0hw6WaUkvWLHDuIDyVZtfaM\u000aQmt27N/gaQulU8OnOCFBr0Xoj22fVGUFituYvinSjgF9+DHO/d2gnNPXDfOewvkf\u000aQxYETnT1qklzp2OYgicrH5UMLOJXioLFgdvdtYXSZDS3iEdmuwUQMtKD34eWaiD4\u000ajcu68EQyn65xhh4g5bs4MmWFMsM5S7nLZuLfLvC2QTKPDdxiSSqapRFRTwD5Kbxb\u000aq9ItJPt3iYqICVo4MMSNXn32EFoaL6gm1bXeQO/xDkyL4wVe9ZVCnXFpyxsJ5H8m\u000adcm+kqFEf9sxj1Ap5pgmH8Lnu7w1RpD5gLmapyNGawuzvF/ZWGY+ST+HS6aVtl8=\u000a=DIqi\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "0e7d123e915a45cc9f30a81546957605"
}, {
    "_id": "15624a18f7984c5f8ec1fe76b541c9fb",
    "_rev": "1-ff7e225e6ac9d3936d307c6977e3b570",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:01:51.050462Z",
    "create_timestamp": "2011-12-14T23:06:37.937271Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-14T23:06:37.937271Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ae79936486101192a56a65680af6ae86b271505c64b48e8ff7a0fb27c9ef0201b\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SvoAAoJEMvWxuXktJT8QT4IALU7rXSYCL6zXJmRT69J4gIA\u000aHC3Ui+txw7fmlbK0WV+Ig8tr13JBsfYAB6Lk0HNqoEjXcq+ssWVHccaTyixKZKZU\u000aAoa0ycGoZkZNSO+K2g3fgrd2gK/uj2ZkQbbjv+hOFayaPEyRQM/qepHnDL+R7lnB\u000aaz1n04uVj0bKm3pHjYwEvdiqwgzCndnJoOw2eEWNpyIl1e+3goBw8tU2mO9bNO+2\u000a6eF/hg69l2co7yle5byZGhbljm/dSdWgDo28MMGPJ/EzaQGM0Up5RRm4FSnDkw1U\u000aCvlIdvog2tA3QZOSKVB5/UYv27NQzdB8Y3AG5RLo21icaXeTN6+bn6vMqxSRG8c=\u000a=o/7t\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "doc_version": "0.23.0",
    "doc_ID": "15624a18f7984c5f8ec1fe76b541c9fb"
}, {
    "_id": "37bf7a8430c04393a3792a475d46715b",
    "_rev": "1-3e2ac4e86f25306ab7f270efd5e1d51d",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T23:04:47.003273Z",
    "create_timestamp": "2011-12-14T23:04:47.003273Z",
    "update_timestamp": "2011-12-14T23:04:47.003273Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ae79936486101192a56a65680af6ae86b271505c64b48e8ff7a0fb27c9ef0201b\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6St5AAoJEMvWxuXktJT8dWEH/1A+jngAh3YhSkFtiRLBwcwo\u000aO+msqXWqQ9VjPbE+JLRT18udXQVBtHG9dXaTOLIVQYTxjvF83DSf004kDvvM/cAR\u000aED+qBVppMOGKf5s/RbZvHzVT5CFGfOyrvNKJtG4yaq8cua4fBPz8rCI26+sX2eie\u000ao+UiWbFMYYYcUEjD2PAPutB0/TA2WTPHcjIYnC2Ppm+4uQ2wvNOf7RtuA2m+YHrx\u000amLL5ljasoG9vWI4GQhMIDCs+R2/El3EVxBq3+AVi7KUTjXkA5GXuVnAqhjs0EgmG\u000aufZ16rGxEis9Y6QWsUerTwScf8pf64ajbmA3IZj16cF5rL+z4LOHryFLKT5jt6A=\u000a=qkuJ\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "37bf7a8430c04393a3792a475d46715b"
}, {
    "_id": "448aa4e89b0d4b4dba0fdcc0edb979d0",
    "_rev": "1-c5a20a643045db522c2fed8b6ec3204e",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://learn.genetics.utah.edu/content/begin/cells/scale/ was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://learn.genetics.utah.edu/content/begin/cells/scale/"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:01:54.795598Z",
    "create_timestamp": "2011-12-14T22:51:28.799220Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://learn.genetics.utah.edu/content/begin/cells/scale/",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-14T22:51:28.799220Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ae2f3def23c4eb1eafcc63109dab4f61cc96a29f2e0180782f6ffac2946371efc\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6ShaAAoJEMvWxuXktJT8qUUH/iplMEQP+fE6f6jzvV+vrkOV\u000auliZEs/k8jMB0PYR8qHwhdRoA+w/UDQcXxD7vueQw/DzO4MkOoMrvmEFkg6UqLmB\u000aaIeot6XyL2voEK3IlicTrKV38PoQJWJnD3zz3pa85y3eI8L27yP37tTjRFpJ+bp3\u000ajh0+lf8Z3bR4jmh9Di+GuB1GIW7pgXRdJ+nHAcqnMiaXAVzzMJTnSjBXfCfS0BLx\u000at6VAO/bvaC7RkNU98hXqBhPivx852wDfBCbHbZr2Abq8Qb30fP9/JoTa5L+d8WvH\u000aXU00ZpwO3nqg24o2NvFw0rHwplrj70lb/v+0Vnxz/GMkFtbw7m0MSIMVucZg1p8=\u000a=CZZO\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "doc_version": "0.23.0",
    "doc_ID": "448aa4e89b0d4b4dba0fdcc0edb979d0"
}, {
    "_id": "4a6ca26c962e48d48bc91cbcaf74efc9",
    "_rev": "1-8fe6b6c45627b2e660bccb7fdca1e04f",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://aspect.cup.cam.ac.uk/DataServlet/e60faedfc9bccf626bf022cf2f59ffb1b17bd234.jpg was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://aspect.cup.cam.ac.uk/DataServlet/e60faedfc9bccf626bf022cf2f59ffb1b17bd234.jpg"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T22:57:12.148494Z",
    "create_timestamp": "2011-12-14T22:57:12.148494Z",
    "update_timestamp": "2011-12-14T22:57:12.148494Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://aspect.cup.cam.ac.uk/DataServlet/e60faedfc9bccf626bf022cf2f59ffb1b17bd234.jpg",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000adee830d754a86b1c704949c5b2ea59f8ad1453f7a199e49423f23109d6bdd0b3\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SmyAAoJEMvWxuXktJT8gZ4H/A6C0k6QET/l0mu2F0HugZW4\u000aLB98KBoZDvfqGAT6jrkJFw6tsmvqlMQsPpH2MhJPqegjEpksrwO16tRriz02ZYH2\u000a0V4D+4/fSoW07VBMho8A4HeVhLEhJ+fgo2nS23MYopcOh+Q83jplfVrQfdg7fg5S\u000aY9b8EEZwb2ArdfQa25PDZv/9JtvG0r9GY43f6d9N7YxbznaHHEj5Vto/W/pXO8Qf\u000age5FnTcuLGmX17plOETonZlQKRTaLDp4y5xB+yYjM5oCyIdQBZdNB+9K4kuBSRHP\u000alkp/lc/8PSl0d1jsUkgWWJXE627zQ5By/ePryfn/hsieQwDoMWtMVZPNFNa8+Ss=\u000a=HTyp\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "4a6ca26c962e48d48bc91cbcaf74efc9"
}, {
    "_id": "8200916506204f3384981a886d5d6390",
    "_rev": "1-97550c0a6b828f228d79c4623bd11d22",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://dum.rvp.cz/materialy/stahnout.html?s=artkmpue was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://dum.rvp.cz/materialy/stahnout.html?s=artkmpue"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:02:05.233523Z",
    "create_timestamp": "2011-12-14T23:22:41.834791Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://dum.rvp.cz/materialy/stahnout.html?s=artkmpue",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-14T23:22:41.834791Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000a3e7ad817ee6531ea49ba885454c52bf9127cb0ddc747c2361ef3a6cdae285472\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6S+rAAoJEMvWxuXktJT8UPYH/3kOZ9js5UdGswGAPCOxV7JU\u000a2m6/bkGZRJhV5x2Q3EFM2elIqrLb2bFTT6ZqYI8n6dn5E5cMiObhFfuXiCNuFG+k\u000abvJ44oYG0VUtLCD3bKbat6d90eRpnjuarzglEIlLqkRGNWUstEtVvxkKjuP83aSX\u000aZt3iDXFUEAeonaWKmPA/PzlNKw37ZiatUpm7GL24nZoZJTnitnc1/kiqN3OHG2hn\u000aFa8TFgxKWv8yqSkNN6ppy7O7OUT1pjOnvrUIvw/6SrIgzklYNzpRdJdTd0utQDDa\u000apc632oYfrmbkzQ9XfxTwdfsXnHYKZGtn7IdG6+Rs/ASZ5BftOnYWFX0sIqxFSQ4=\u000a=ipZo\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "doc_version": "0.23.0",
    "doc_ID": "8200916506204f3384981a886d5d6390"
}, {
    "_id": "8270a43024b54569a3b6db13c96dbb5d",
    "_rev": "1-ea30ceec08721ea77c0be71ef9e8080b",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T23:05:15.631939Z",
    "create_timestamp": "2011-12-14T23:05:15.631939Z",
    "update_timestamp": "2011-12-14T23:05:15.631939Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ae79936486101192a56a65680af6ae86b271505c64b48e8ff7a0fb27c9ef0201b\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SuVAAoJEMvWxuXktJT8fZ0H/3kNpbRkAhrZ+wQbkUFei5qq\u000aBPY5B2Qf8+umBjVMYHSAs6iuv2rN8ruDZJ843H3DYSKaFG1Z12YDTSA9O0nREcWC\u000aQ8g9lM1jiJg+7QBewJqozAUhaGhAio5aVEUsDJ6AY/L+ZYZarFXfnlOmlfkpuZwP\u000a8AzA+y7sDb0dos2jEADeevu7sBaEhWqy+1EUTjTY0x4U1SiLpwHKtFUxHC2+u3iw\u000aEkbX9ukU7yav1E5JA4M06B5igzeJwatbIAs23h4KmJDeMa4nMgAIIoKci4gdIRQC\u000alO7HIvwMPhgCZzot21ymOxhEhKKU92tD13ZAt4y28Zk+fe6gTUi2a60SIxMkb4Y=\u000a=x9xF\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "8270a43024b54569a3b6db13c96dbb5d"
}, {
    "_id": "9a04f2bc22b84786a5e21a340fef9ba6",
    "_rev": "1-f168e49ae4a5815cae0c35c23d2b1a1d",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://dum.rvp.cz/materialy/stahnout.html?s=artkmpue was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://dum.rvp.cz/materialy/stahnout.html?s=artkmpue"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:02:06.071401Z",
    "create_timestamp": "2011-12-14T23:05:21.305629Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://dum.rvp.cz/materialy/stahnout.html?s=artkmpue",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-14T23:05:21.305629Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000a3e7ad817ee6531ea49ba885454c52bf9127cb0ddc747c2361ef3a6cdae285472\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SubAAoJEMvWxuXktJT8qYIH/1mXEylV1udVt1MJAg1TGuLE\u000acJiuezHlUdH7iai61yMPvBb/LiwUnnbvY9p5Yy9zWyucnDxU3FkEBgsAlLc5nidJ\u000aCDDUfFsy4z28vBsC/Sg5jT1MrFFMHCu+6UUS8G8zEFCkX0QvkhosPoWOTIIhwfdg\u000a2aA9nDXxxSIWr1/EbBFST1BYzDzn3uyyvWPK1g5ZeZuE93ew9UF02wQ/oDFsTqju\u000aWVhqkaQK7p/qiwcjyoyGJMtRa6Fk4qJjeU10ooFEoSgzrAO0SE24qUlU/YRMg15T\u000ae+sGYkgJiOIugMJVBim/Gii95DNr5HKzDIYYVxtBq5OBrrXRqhKH/3Dmcfm62Q8=\u000a=8d84\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "doc_version": "0.23.0",
    "doc_ID": "9a04f2bc22b84786a5e21a340fef9ba6"
}, {
    "_id": "b5bc095d65304b31bd4be2d9058536be",
    "_rev": "1-9ef9e7300f1016ffacf4a1ea349f6503",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://aeiou.iicm.tugraz.at/aeiou.encyclop.d/d865882_ge.htm was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://aeiou.iicm.tugraz.at/aeiou.encyclop.d/d865882_ge.htm"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T22:53:34.991112Z",
    "create_timestamp": "2011-12-14T22:53:34.991112Z",
    "update_timestamp": "2011-12-14T22:53:34.991112Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://aeiou.iicm.tugraz.at/aeiou.encyclop.d/d865882_ge.htm",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ab195d7a552018ac8d524c080eaceae00e5fa5a6dee37f765a00d89f0aca8522b\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SjZAAoJEMvWxuXktJT86bYH/1/ZicYBMzYswim1GvwrQdZ0\u000abaWHjeRy1IQ5GqhVp96M0nuLZ/hthDIrLr88F1twJySsfMOGrtBSq+/SqVpf9XZB\u000akbZcKsMiXGRMo7x+OBo+gtNas3HKfvyZZy/eXDZ9gbllE4EEVFCf0DbhGCbVQ6Ml\u000avymfCa5Lei88fraexUgP8CPaWD+IBiO7N2bfXbxUR+82T/HlmeWIFpAxZykgzYT2\u000aISeo9emXzf2ATlWUsyc37E2HAytYZeyyDbMpDVJ9Kyp3c0ozlPFVDgeocbBF3Nob\u000aSFQplZPad8thu9atlclVcd4HCsKBqFv3CQem6/Bz0jNmOEwE/6gOPNbV/255JDQ=\u000a=vjtm\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "b5bc095d65304b31bd4be2d9058536be"
}, {
    "_id": "c37579b1cc91420e870489fb6d66812b",
    "_rev": "1-fec856d389318f3423b2240bb73ff0cf",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://www.klascement.net/21101/?ref=aspect was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://www.klascement.net/21101/?ref=aspect"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:02:07.531538Z",
    "create_timestamp": "2011-12-14T22:58:26.199428Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://www.klascement.net/21101/?ref=aspect",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-14T22:58:26.199428Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ad8a38bf9e014eb266fcdc0f14490b9588e65beacf07cf51be0c405596bce1535\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6Sn8AAoJEMvWxuXktJT8ku0H/3eeVQMm9lJ3R4+gJa1V9crk\u000agEbzRvKHNpPugqzeakEur64dR/yL37/GMvbWLByU1/8XyXTGFgO85NY7yOfhpN1C\u000aiEJBfer6wwIqyJqR4O6Cr43HM5azk2jhZbvOjeFENwVtFvfc+M6iCYuF+62KdTnJ\u000a3VvHkzg50ptlRl+cUiGJhKiHB6jyGPJUX7J5mqyTcitA26SG8TbrMZ0U/kDd6mme\u000a7e/7kUpoW0w2ME2dGoB+sR2EjyZI+0i1IY5bnDYdHY6xHEhcfO8ExBluJH0PQZnY\u000aicf8jTE+YwIG53mcjNp2PTKx6QeWWNf6EgGT7ktjHLDgRRBMgxarWx5BmAtl6aA=\u000a=JTvG\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "doc_version": "0.23.0",
    "doc_ID": "c37579b1cc91420e870489fb6d66812b"
}, {
    "_id": "ccf6bd13d8b84ee6a7ff122dda2e650b",
    "_rev": "1-e3d8a9024e80546bb31acf15d32b3fc2",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://colos1.fri.uni-lj.si/fizleti/FIZLETI_FIZIKA/contents/optics/diffraction/prob38_2.html was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://colos1.fri.uni-lj.si/fizleti/FIZLETI_FIZIKA/contents/optics/diffraction/prob38_2.html"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T23:00:00.139794Z",
    "create_timestamp": "2011-12-14T23:00:00.139794Z",
    "update_timestamp": "2011-12-14T23:00:00.139794Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://colos1.fri.uni-lj.si/fizleti/FIZLETI_FIZIKA/contents/optics/diffraction/prob38_2.html",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ad7d2e1a36cc8ed6bf20a57cba54494bbc1c71039573c6a8a713885162c38a76a\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6SpaAAoJEMvWxuXktJT8EV4IALYI9yT2NEv/w9HvjMUXW4Si\u000avVjeFDTzqeYu2fnQi40dV15X3cN15butp2b87L/yH56TRYFQ3ccSZ12H8xVrWidd\u000aJl0+Ps4HZmqAdQzYt7wVXQ9YLdTamYQf+409vOVcyaJ1x/7qPbddyoa6/JmmGaaP\u000aRRxMmU9XDPiPSjgZLrKbaISFS1cHEEHSUCkdPX/gvxHJpDAkTFC+ZWpmhFsLG64a\u000aqrs4UZjhb/QpxhHvNAEzRLg0XxLKR0yQRUjpqJbSYnfiW907S4dcyCuyAvtu9yy0\u000aTBl0ddD7MGKxDnEFRCr+svwg7xjRbGTHGkPt417F4ek6ejNpeGgtoFKTvKszwPg=\u000a=9LYH\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "ccf6bd13d8b84ee6a7ff122dda2e650b"
}, {
    "_id": "cfadca486b884e36b9a63221b8f932e3",
    "_rev": "1-88d0df1f2005a3b35d73f7d8f329de6e",
    "resource_data": {
        "activity": {
            "content": "Resource @ http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt was shared by a user of LRCurate",
            "verb": {
                "action": "shared",
                "context": {
                    "objectType": "LRCurate Search Engine"
                }
            },
            "actor": {
                "description": ["LRCurate"],
                "objectType": "user"
            },
            "object": {
                "id": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt"
            }
        }
    },
    "keys": ["plugfest_demo", "lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-12-21T06:02:07.892941Z",
    "create_timestamp": "2011-12-14T23:04:01.935021Z",
    "active": true,
    "publishing_node": "cad60ef7493246868f6394fa764397c3",
    "resource_locator": "http://dum.rvp.cz/materialy/stahnout.html?s=lhtcjnqt",
    "identity": {
        "submitter_type": "user",
        "submiter": "Junyo API"
    },
    "doc_type": "resource_data",
    "update_timestamp": "2011-12-14T23:04:01.935021Z",
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "digital_signature": {
        "key_location": ["http://keyserver1.pgp.com/vkd/DownloadKey.event?keyid=0x41FC5D161965D4F2"],
        "key_owner": "Sam Junyo LR <sam@junyo.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000ae79936486101192a56a65680af6ae86b271505c64b48e8ff7a0fb27c9ef0201b\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (GNU/Linux)\u000a\u000aiQEcBAEBAgAGBQJO6StLAAoJEMvWxuXktJT8pXAH/2+BVu0I28i+JqVDCGBsDnGd\u000a4MOLpSjozekaBpWtKcf5NOXxVjB2DpFoFEy4pA1YCAyvgLyU0Nq0V99OPQb04ltK\u000aE2VRbjs7JLmlg+LejOyAxnUVGDV5+hoPIRHxwHTuddT2RrzwW+NasAgCNqEdzLDT\u000afMg/RqT0pR3spSottJv00C6VXKczvXLfFz3aUWB39S+65hH6wH2SQfVqzbiN4dzz\u000amx084JquZewLGZnIbLvyIwbKpTRH0Z6aKMrLUbC6b4OoPEdjk+H0QLIvXnlx2OgP\u000auVpuvbWEdxvmh50Db37g+jyCFVeNystkMF3TvdmTJBngi8sVDwKMtK5WhXKJM9Q=\u000a=4Av1\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "doc_version": "0.23.0",
    "doc_ID": "cfadca486b884e36b9a63221b8f932e3"
},{
    "_id": "4361399fb5e4449699dfec5c06065e4d",
    "_rev": "1-b6333002b12b4f55ce5a237ad747b5ed",
    "resource_data": {
        "activity": {
            "content": "The Resource @ http://betterlesson.com/lesson/6624/place-value was aligned to the ASN Learning Objective http://purl.org/ASN/resources/S1143457 by a user of BrainHoney",
            "verb": {
                "action": "aligned",
                "context": {
                    "id": "http://purl.org/ASN/resources/S1143457",
                    "objectType": "ASN Learning Objective"
                }
            },
            "actor": {
                "description": ["user", "BrainHoney"]
            },
            "object": "http://betterlesson.com/lesson/6624/place-value"
        }
    },
    "keys": ["lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-11-05T23:46:04.482491Z",
    "create_timestamp": "2011-11-05T23:46:04.482491Z",
    "update_timestamp": "2011-11-05T23:46:04.482491Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://betterlesson.com/lesson/6624/place-value",
    "identity": {
        "submitter": "Agilix Labs, Inc.",
        "signer": "Agilix Labs, Inc.",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://www.agilixlearningservices.com/LearningRegistry/public-key.txt"],
        "key_owner": "Agilix Labs, Inc. (Key to publish metadata and paradata to the Learning Registry) <brian.adams@agilix.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000d\u000aHash: SHA1\u000d\u000a\u000d\u000a684ba700dd839c904ff6cfa0b416124cb663323a0d02083791b9d007a7374d65\u000d\u000a-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v2.0.17 (MingW32)\u000d\u000a\u000d\u000aiQEcBAEBAgAGBQJOtcq9AAoJEOGihKTJVgpi+GoH/08SfChneruYJfpr/zmJbP8h\u000d\u000apZSREasDt+pMCe66mEmd0GyrdZCJUdUZ4eNIEiDqJ9yJ+h12y8O+0oBezrlyZ7BC\u000d\u000a4b1CwmiMgVi7YMQVAi5IAhWYEVt6MoxAESigRj6xXMYXA1SRj/M+JrbuOEdfwvAK\u000d\u000afNaOqXGAxm6HKkPyVDSHXCMltoBisPP4xgGnLpKOo8sPv8G3L3AkanW21pDXeIat\u000d\u000asE20VKMzHvgDHupJOe9mEyElJa2QBoZAH6ABxQn86O3QnF2kcg5xcs5Sp6O3Zx0p\u000d\u000a315ZoTJRdpA4NGbvBBdsJ3tFfXKW7Gt0o5kI5YktvJ6+ah/c//ORR7CozW3iDVY=\u000d\u000a=IKvL\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "4361399fb5e4449699dfec5c06065e4d"
}, {
    "_id": "44a772faf29641a8b4967a5e47a778f0",
    "_rev": "1-2122260aff350f833cbac9a11e4a1adc",
    "resource_data": {
        "activity": {
            "content": "The Resource @ http://betterlesson.com/lesson/8372/area-of-a-circle was aligned to the ASN Learning Objective http://purl.org/ASN/resources/S114351B by a user of BrainHoney",
            "verb": {
                "action": "aligned",
                "context": {
                    "id": "http://purl.org/ASN/resources/S114351B",
                    "objectType": "ASN Learning Objective"
                }
            },
            "actor": {
                "description": ["user", "BrainHoney"]
            },
            "object": "http://betterlesson.com/lesson/8372/area-of-a-circle"
        }
    },
    "keys": ["lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-11-05T23:48:41.105754Z",
    "create_timestamp": "2011-11-05T23:48:41.105754Z",
    "update_timestamp": "2011-11-05T23:48:41.105754Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://betterlesson.com/lesson/8372/area-of-a-circle",
    "identity": {
        "submitter": "Agilix Labs, Inc.",
        "signer": "Agilix Labs, Inc.",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://www.agilixlearningservices.com/LearningRegistry/public-key.txt"],
        "key_owner": "Agilix Labs, Inc. (Key to publish metadata and paradata to the Learning Registry) <brian.adams@agilix.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000d\u000aHash: SHA1\u000d\u000a\u000d\u000a7c15ee553c49ccb14f8ec817d15307f0a5f136b2ba7b3cd87110416aa2aee1de\u000d\u000a-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v2.0.17 (MingW32)\u000d\u000a\u000d\u000aiQEcBAEBAgAGBQJOtctZAAoJEOGihKTJVgpilsQIAIH6pGx9YC9gKtJExzz+TVus\u000d\u000aLV7lRUkL4wg4JmlLl/Jcxur7ACL0zo/xzS6liQAGOI8KolvR6mcVWCL08fZbOnKw\u000d\u000aHnkZgFYTFjWPXDcgx+1byN7bTP0onzLM+jVkl6OU9zR9qhneasoyWFGo7SAonEi6\u000d\u000arIwBfElw1QR2k6VyTC53qSJ39l/ytHGkIXv+Lp1qWzgEjju4PunmDWjlRGqECeNd\u000d\u000a1XMcTXXWDXam6jQcBG+btoSxJ9C1SqfhAhTNnPAuYzAtbkLodVI3dFipebnXkMgr\u000d\u000aw1FLvj55lZcnNUXX/glqhgeH3OWVFl432kNuqF/MFDVIzj59gLTY/XHrTMQXXxQ=\u000d\u000a=ZpLC\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "44a772faf29641a8b4967a5e47a778f0"
}, {
    "_id": "7f0e2ba9182640b2b333ea872e33f6cc",
    "_rev": "1-775af669ba4a9936e9d17ecda4d6bf92",
    "resource_data": {
        "activity": {
            "content": "The Resource @ http://betterlesson.com/lesson/8380/pythagorean-theorem was aligned to the ASN Learning Objective http://purl.org/ASN/resources/S1143545 by a user of BrainHoney",
            "verb": {
                "action": "aligned",
                "context": {
                    "id": "http://purl.org/ASN/resources/S1143545",
                    "objectType": "ASN Learning Objective"
                }
            },
            "actor": {
                "description": ["user", "BrainHoney"]
            },
            "object": "http://betterlesson.com/lesson/8380/pythagorean-theorem"
        }
    },
    "keys": ["lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-11-05T23:50:15.118483Z",
    "create_timestamp": "2011-11-05T23:50:15.118483Z",
    "update_timestamp": "2011-11-05T23:50:15.118483Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://betterlesson.com/lesson/8380/pythagorean-theorem",
    "identity": {
        "submitter": "Agilix Labs, Inc.",
        "signer": "Agilix Labs, Inc.",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://www.agilixlearningservices.com/LearningRegistry/public-key.txt"],
        "key_owner": "Agilix Labs, Inc. (Key to publish metadata and paradata to the Learning Registry) <brian.adams@agilix.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000d\u000aHash: SHA1\u000d\u000a\u000d\u000af1d678ffe01b08d744e537bb84b87fa3b98b2a4b3b52d0b7841beea112c196ac\u000d\u000a-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v2.0.17 (MingW32)\u000d\u000a\u000d\u000aiQEcBAEBAgAGBQJOtcu3AAoJEOGihKTJVgpi9Z0H/j8qt35v2BAXVV51TZYEZsnK\u000d\u000aFt/qRKr3bOj2N+/ELqcMAZVbudSxib3w5Y1Ud2Zl/fhvYNKYNoTQo31WCUHbFVjl\u000d\u000a0rWz2UuWLgQ54fn3jGeifcgzzjMXuyqgHcspsKET7u6m0F8UkeczEP/6DR4EuzFt\u000d\u000akEUD4rDcSIOar0lEikmgqy0I1tZwfZkXqEoB8LZfcaP2fKDid8HmptfQqYSBKWzP\u000d\u000alk1REaUxWCpWwXVLgRnupjEX95j53Y+wwNuXhosp2xVd0g9QpNVx0WkyqmDkLirB\u000d\u000a4Do7BCEhbiWY0CRPJjD92ThR/0mZDnnzZAsc60zHsIKfs84kJn9NkRkP/V6jHWs=\u000d\u000a=j/Bd\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "7f0e2ba9182640b2b333ea872e33f6cc"
}, {
    "_id": "89bc712ad4b04b17858e818fd0a4cd8e",
    "_rev": "1-8b36b34bd20875912c8546ef247af194",
    "resource_data": {
        "activity": {
            "content": "The Resource @ http://betterlesson.com/lesson/7483/greatest-common-factor was aligned to the ASN Learning Objective http://purl.org/ASN/resources/S11434D4 by a user of BrainHoney",
            "verb": {
                "action": "aligned",
                "context": {
                    "id": "http://purl.org/ASN/resources/S11434D4",
                    "objectType": "ASN Learning Objective"
                }
            },
            "actor": {
                "description": ["user", "BrainHoney"]
            },
            "object": "http://betterlesson.com/lesson/7483/greatest-common-factor"
        }
    },
    "keys": ["lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-11-05T23:49:54.843930Z",
    "create_timestamp": "2011-11-05T23:49:54.843930Z",
    "update_timestamp": "2011-11-05T23:49:54.843930Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://betterlesson.com/lesson/7483/greatest-common-factor",
    "identity": {
        "submitter": "Agilix Labs, Inc.",
        "signer": "Agilix Labs, Inc.",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://www.agilixlearningservices.com/LearningRegistry/public-key.txt"],
        "key_owner": "Agilix Labs, Inc. (Key to publish metadata and paradata to the Learning Registry) <brian.adams@agilix.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000d\u000aHash: SHA1\u000d\u000a\u000d\u000a360a65205517ec77b199a345c8e075f28b96df9448cb4ddae6ebe57f079b8564\u000d\u000a-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v2.0.17 (MingW32)\u000d\u000a\u000d\u000aiQEcBAEBAgAGBQJOtcujAAoJEOGihKTJVgpinYEIAJxJb7+KtYmlCvpdrtaoVVZI\u000d\u000ay5WGgsX3YHILsgi1jQG2kDIdUF0Vdh/HAh6SANeuJds5SQISQJR4JBVSkQb8X1ty\u000d\u000ag8mPsxG5K9ux9UxkhvSWu+4MFjNM29Him4KN8qMajgj6mYquEZ9U6KRLocy3/dUL\u000d\u000atkHsSTU7ix2k8Bq8mcvv9IPip+7t9nHsUXQedaUCmU/fUmkLhg8fCSeVSADxYNBZ\u000d\u000aXe+Oas1bbL+tn6nrxjnGWwqY4T06H1hR3UEzEoG1Uo73DqJjuners0pWV0k3SBw6\u000d\u000aedlT5XlHpuDTPqklNEktTrAm2uT4OkHYK46/4I857feWQl8nGB59061keHT9KhE=\u000d\u000a=xG8M\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "89bc712ad4b04b17858e818fd0a4cd8e"
}, {
    "_id": "bbc767fb37434a2789df967646966ebe",
    "_rev": "1-21d753b7f60c7cb395f5bf71ba55424e",
    "resource_data": {
        "activity": {
            "content": "The Resource @ http://betterlesson.com/lesson/14844/finding-the-circumference-and-area-of-a-circle was aligned to the ASN Learning Objective http://purl.org/ASN/resources/S114351B by a user of BrainHoney",
            "verb": {
                "action": "aligned",
                "context": {
                    "id": "http://purl.org/ASN/resources/S114351B",
                    "objectType": "ASN Learning Objective"
                }
            },
            "actor": {
                "description": ["user", "BrainHoney"]
            },
            "object": "http://betterlesson.com/lesson/14844/finding-the-circumference-and-area-of-a-circle"
        }
    },
    "keys": ["lr-test-data"],
    "payload_placement": "inline",
    "node_timestamp": "2011-11-05T23:50:37.888902Z",
    "create_timestamp": "2011-11-05T23:50:37.888902Z",
    "update_timestamp": "2011-11-05T23:50:37.888902Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://betterlesson.com/lesson/14844/finding-the-circumference-and-area-of-a-circle",
    "identity": {
        "submitter": "Agilix Labs, Inc.",
        "signer": "Agilix Labs, Inc.",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://www.agilixlearningservices.com/LearningRegistry/public-key.txt"],
        "key_owner": "Agilix Labs, Inc. (Key to publish metadata and paradata to the Learning Registry) <brian.adams@agilix.com>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000d\u000aHash: SHA1\u000d\u000a\u000d\u000ae48b78f954355fcab544ecf3c98d99fd3305410d2e43333a10fa4d0c50650ae2\u000d\u000a-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v2.0.17 (MingW32)\u000d\u000a\u000d\u000aiQEcBAEBAgAGBQJOtcvOAAoJEOGihKTJVgpitgwH/2oKCBAQFlf8I0+4ZXPE4ywP\u000d\u000ajxjyxRu95KXp3WGAQ29YAxPsNc8TckcgxcXgR0/++hosTr5qpUvuY1XQPqz8D7LX\u000d\u000arYUE6AzReratTkw3QRzVdC6LITPFesHukSS2Mdwkyew6AB5ho6jghlT2KlZlpuP6\u000d\u000aaUP/fWs2Kal7U/To8Tm/a4sKY9kLRlStIE1ggo/RiBilIVbQZL5HcriIFS70Jl/6\u000d\u000aBt+2OavTp+gWXLu0x5GTHjM3qo3QwTBYcpiNnXbqgX4mUVRRrZlQ2H9XEx/N9HCg\u000d\u000aCfAG913CS1odQrSZ7XHVA7Ocv7Zhv7A3ehUsHYcmilneo7AZ3yRdsBt+fb2TgPY=\u000d\u000a=XcyW\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "bbc767fb37434a2789df967646966ebe"
}, {
    "_id": "244c5c3fa03a41f48f170a86fa34443c",
    "_rev": "1-20f0755410fb35a08aec50aca5bc67aa",
    "resource_data": {
        "activity": {
            "verb": {
                "action": "endorse",
                "content": "The Brokers of Expertise Standards Matchers group found at http://myboe.org/go/groups/standards_matchers was endorsed by the administrators of the Brokers of Expertise Learning Management System.",
                "date": "2011-12-14"
            },
            "actor": {
                "displayName": "Brokers of Expertise",
                "id": "http://myboe.org",
                "objectType": "LMS"
            },
            "object": {
                "displayName": "Brokers of Expertise Standards Matchers",
                "id": "http://myboe.org/go/groups/standards_matchers",
                "objectType": "group"
            }
        }
    },
    "keys": ["lr-test-data", "endorsement", "standards alignment"],
    "TOS": {
        "submission_attribution": "Brokers of Expertise",
        "submission_TOS": "Copyright 2011 California Department of Education: CC-BY-3.0"
    },
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T22:29:31.675098Z",
    "create_timestamp": "2011-12-14T22:29:31.675098Z",
    "update_timestamp": "2011-12-14T22:29:31.675098Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://myboe.org/go/groups/standards_matchers",
    "identity": {
        "signer": "Brokers of Expertise",
        "submitter": "Brokers of Expertise",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver.pgp.com/vkd/DownloadKey.event?keyid=0x7DA1E3E28AF74166"],
        "key_owner": "Brokers of Expertise <webmaster@myboe.org>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000a64a761a8941c4b1d5ecb8982e02d7bb42bc59d990b376b6870d95b0c15d44174\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (Darwin)\u000aComment: GPGTools - http://gpgtools.org\u000a\u000aiQEcBAEBAgAGBQJO6SNKAAoJEEUCJ7Zuexln4wAH/2tbQ6Ap54e9OTMO2s7aKh8X\u000ax6aM+OAJ0+buHj42+aZLNVVCWENJRMx2NoEq+LOvEDqQFU3xhJGGUXsHbDzVyGC0\u000al8F6S7xAAXwj/D5B6zhqkRpWMy8H/d1qS3gGMh8yNV8mXTU9MK7iRc71QVx08u5h\u000atluyqMugUsz1E0+6kvRoWOjYynkzf8dmJJjJrHNAGfPgzF3yNmJSyz9w5GkWu7Dk\u000aRk12IUL1YGSWo148bToSTwwGzPRgc2sSEWFS7gEdPI34553Csvjl5OwX54aE/nqB\u000aslcKz7hLt1ZuTmox9BUsIpAIpochjbOJqq6LUHjHmiXY/D0joIQCIs7cHBRHNsA=\u000a=YkMU\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "assertion",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "244c5c3fa03a41f48f170a86fa34443c"
}, {
    "_id": "4e7576e5a75e4b69a48359d84266ef21",
    "_rev": "1-d5d2e7202f0f543331b8a6afad102039",
    "resource_data": {
        "activity": {
            "verb": {
                "action": "endorse",
                "content": "The Brokers of Expertise Standards Matchers group found at http://myboe.org/go/groups/standards_matchers was endorsed by the administrators of the Brokers of Expertise Learning Management System.",
                "date": "2011-12-14"
            },
            "actor": {
                "displayName": "Brokers of Expertise",
                "id": "http://myboe.org",
                "objectType": "LMS"
            },
            "object": {
                "displayName": "Brokers of Expertise Standards Matchers",
                "id": "http://myboe.org/go/groups/standards_matchers",
                "objectType": "group"
            }
        }
    },
    "keys": ["lr-test-data", "endorsement", "standards alignment"],
    "TOS": {
        "submission_attribution": "Brokers of Expertise",
        "submission_TOS": "Copyright 2011 California Department of Education: CC-BY-3.0"
    },
    "payload_placement": "inline",
    "node_timestamp": "2011-12-14T23:12:01.128119Z",
    "create_timestamp": "2011-12-14T23:12:01.128119Z",
    "update_timestamp": "2011-12-14T23:12:01.128119Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://myboe.org/go/groups/standards_matchers",
    "identity": {
        "signer": "Brokers of Expertise",
        "submitter": "Brokers of Expertise",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "digital_signature": {
        "key_location": ["http://keyserver.pgp.com/vkd/DownloadKey.event?keyid=0x7DA1E3E28AF74166"],
        "key_owner": "Brokers of Expertise <webmaster@myboe.org>",
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNED MESSAGE-----\u000aHash: SHA1\u000a\u000a64a761a8941c4b1d5ecb8982e02d7bb42bc59d990b376b6870d95b0c15d44174\u000a-----BEGIN PGP SIGNATURE-----\u000aVersion: GnuPG v1.4.11 (Darwin)\u000aComment: GPGTools - http://gpgtools.org\u000a\u000aiQEcBAEBAgAGBQJO6S1AAAoJEEUCJ7ZuexlnENYH/2PloIa3ExMpTz/7pqpcqSoZ\u000alqagAnxR6iTRcZoP5OuwO0l0AmAQ+aZgCcK8QGKtJWhQjBaQMRZJYEeUDC92ZBtf\u000aMi766uWMgA7mK+oFInP/mcUmJhWfVTAlDQxpO7soPa1CQnZT4vXJ5eInYLkNKQdi\u000aVeYRHwXPbZ6mDqsukPJo7lP5psDHXccy0xEKKa04vi8f/BGQogReTzM+GUhZaeU/\u000a9s6Gpyj3bWNmUh+t1Yc2HQqk7VOywGzwhS71TZN+gi94F9lLUQ09hHEz+nGy7lr4\u000a53zfNJKSCSGM2zKbnn/WRx1U8ZNXkIJLWzfhv2ggWnpzOg+XksTSh5LwpPqnO8M=\u000a=VBri\u000a-----END PGP SIGNATURE-----\u000a"
    },
    "resource_data_type": "assertion",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "4e7576e5a75e4b69a48359d84266ef21"
}, {
    "_id": "2f5e693969fb494b84e397b410691ba6",
    "_rev": "1-3ad018f786f8a7df403c0491fe85f877",
    "resource_data": {
        "activity": {
            "content": "The a user uploaded a new model which was assigned the PID adl:1",
            "verb": {
                "action": "Published",
                "date": "/Date(1320160937480)/",
                "context": {}
            },
            "related": [],
            "actor": {
                "description": ["AnonymousUser"],
                "objectType": "3DR User"
            },
            "object": {
                "id": "adl:1"
            }
        }
    },
    "keys": ["3DR", "test", "boat", "model", "gun"],
    "payload_placement": "inline",
    "resource_TTL": 0,
    "node_timestamp": "2011-11-01T15:23:02.576501Z",
    "create_timestamp": "2011-11-01T15:23:02.576501Z",
    "update_timestamp": "2011-11-01T15:23:02.576501Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://3dr.adlnet.gov/api/rest/adl:1/Format/dae?ID=00-00-00",
    "digital_signature": {
        "key_location": ["http://3dr.adlnet.gov/dev/52F0ADE4F48CC68EE681D57648DFE6DE8EBA5398.asc"],
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v1.2.2 (MingW32)\u000d\u000a\u000d\u000aiQEVAwUATrAOwkjf5t6OulOYAQLP/QgAn+zQq32JWkiYoNEkt0lnCGNH3E4CZJoU\u000d\u000av0hrmXrdELWMTviLUzZi7+OCb9fTeMyp4mbnrS98rrx7Mvz+HLWqgKckhimGoNmB\u000d\u000aiAJ/cluddVgV11KdGH8udKj3rw71iYWffHt7LVZvpakiLLHXsD2+pt3ks7zXG4cH\u000d\u000aKET3S1SvZdWmtmdbmOxgimiDugbv6FNw7lrJ5NK3oJT+pwpzfPd6yZZvN+DHEb2q\u000d\u000a64tpmbmICs8UEEGZRnjTRpdgNlVyxX4XHv/kq7dBFpLBxKrw32bjGbgXcoi+6eEr\u000d\u000av4VO4OH4H39gTAne+g3hQhHiQXbkoGnDVLTrjq2prfBBdR3ngPwh7w==\u000d\u000a=MCLy\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "identity": {
        "submitter": "ADL 3D Repository",
        "signer": "ADL",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "weight": 100,
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "2f5e693969fb494b84e397b410691ba6"
}, {
    "_id": "3e6178e1d7e24b0aaef12d6eb7da447d",
    "_rev": "1-6de849a762f3a0c7ff76792ccd25e8c2",
    "resource_data": {
        "activity": {
            "content": "The a user uploaded a new model which was assigned the PID adl:1",
            "verb": {
                "action": "Published",
                "date": "/Date(1320160492534)/",
                "context": {}
            },
            "related": [],
            "actor": {
                "description": ["AnonymousUser"],
                "objectType": "3DR User"
            },
            "object": {
                "id": "adl:1"
            }
        }
    },
    "keys": ["3DR", "test", "boat", "model", "gun"],
    "payload_placement": "inline",
    "resource_TTL": 0,
    "node_timestamp": "2011-11-01T15:14:56.376877Z",
    "create_timestamp": "2011-11-01T15:14:56.376877Z",
    "update_timestamp": "2011-11-01T15:14:56.376877Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://3dr.adlnet.gov/api/rest/adl:1/Format/dae?ID=00-00-00",
    "digital_signature": {
        "key_location": ["http://3dr.adlnet.gov/dev/52F0ADE4F48CC68EE681D57648DFE6DE8EBA5398.asc"],
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v1.2.2 (MingW32)\u000d\u000a\u000d\u000aiQEVAwUATrAM7Ujf5t6OulOYAQJ3tAgAkbxZ5pyEIyTnJwzSeAq8RYpxv/OGgD3x\u000d\u000aABxnLI1fn4jZ3SoYsAbh51wdee3KCo2Pwsy0q6Gd0q3FaKoXZmUb22nST+x0W3SV\u000d\u000aakTO5kMWew3KHnxE6/9nuJXY3ss91+oAqH0E7PJSKmYrf518cJ9Q4MeWxYPAqZav\u000d\u000aFEOv4TWP+Gw4e//huk9WU9ZDsqt1FDttw/9BZ+YVttClwWIyk+EBbweDW8D2pMD+\u000d\u000ajzRpArWvqZj1ExylsKC4cUiWP+BZUGwxnyWry9HNGCmGZrz0//iG5WTeIVzrf9At\u000d\u000ah+GvzzApkqS5H0ptf7W4bq/uRz4IbQLf8EZ5aFGsa2ZL9cAxldofPA==\u000d\u000a=AF1K\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "identity": {
        "submitter": "ADL 3D Repository",
        "signer": "ADL",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "weight": 100,
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "3e6178e1d7e24b0aaef12d6eb7da447d"
}, {
    "_id": "b3d0cc76808244118d4798607aa66abb",
    "_rev": "1-1487649eb88994ff2e1043e68ee5e830",
    "resource_data": {
        "activity": {
            "content": "The a user uploaded a new model which was assigned the PID adl:1",
            "verb": {
                "action": "Published",
                "date": "/Date(1320160890812)/",
                "context": {}
            },
            "related": [],
            "actor": {
                "description": ["AnonymousUser"],
                "objectType": "3DR User"
            },
            "object": {
                "id": "adl:1"
            }
        }
    },
    "keys": ["3DR", "test", "boat", "model", "gun"],
    "payload_placement": "inline",
    "resource_TTL": 0,
    "node_timestamp": "2011-11-01T15:21:34.936661Z",
    "create_timestamp": "2011-11-01T15:21:34.936661Z",
    "update_timestamp": "2011-11-01T15:21:34.936661Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://3dr.adlnet.gov/api/rest/adl:1/Format/dae?ID=00-00-00",
    "digital_signature": {
        "key_location": ["http://3dr.adlnet.gov/dev/52F0ADE4F48CC68EE681D57648DFE6DE8EBA5398.asc"],
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v1.2.2 (MingW32)\u000d\u000a\u000d\u000aiQEVAwUATrAOe0jf5t6OulOYAQJZwAf/c5wKlcKthOe4PoCTLlKMk50PhIWxGcpK\u000d\u000aaCoozvI34wDVciixOozLPG+aUEgFpFxR+0r4yEFPl6VmtW34jImZWT8cXHjEKk+t\u000d\u000ahPm0/tJv6KK+70r6CVIH40JPgd3MEYiCUWBVaZpegkxGOfSO1hzP/1ZhhDU4JXem\u000d\u000aUK3BL+rSsjhe4ERD3Y6iYFpgGOQIFdFIFTydraSHLIV+9JBa0qgeC/me8NjyIJqn\u000d\u000aUbvFE26jGXnqZ4lKhb5sbJegf85s44t/fWRVlPaeb30H+tkVkzwoDh+n8iXO/NAp\u000d\u000aajs/2sJ2OQipzIbahuw4hske0jFXvEK+uSUwmhWgp9FLtY9eNNCkwA==\u000d\u000a=Bp92\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "identity": {
        "submitter": "ADL 3D Repository",
        "signer": "ADL",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "weight": 100,
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "b3d0cc76808244118d4798607aa66abb"
}, {
    "_id": "d7df3981be224760a71a98ce885d42a6",
    "_rev": "1-5d907f0775e59380ee5e813e22c2d260",
    "resource_data": {
        "activity": {
            "content": "The a user uploaded a new model which was assigned the PID adl:1",
            "verb": {
                "action": "Published",
                "date": "/Date(1320160910802)/",
                "context": {}
            },
            "related": [],
            "actor": {
                "description": ["AnonymousUser"],
                "objectType": "3DR User"
            },
            "object": {
                "id": "adl:1"
            }
        }
    },
    "keys": ["3DR", "test", "boat", "model", "gun"],
    "payload_placement": "inline",
    "resource_TTL": 0,
    "node_timestamp": "2011-11-01T15:22:41.584690Z",
    "create_timestamp": "2011-11-01T15:22:41.584690Z",
    "update_timestamp": "2011-11-01T15:22:41.584690Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://3dr.adlnet.gov/api/rest/adl:1/Format/dae?ID=00-00-00",
    "digital_signature": {
        "key_location": ["http://3dr.adlnet.gov/dev/52F0ADE4F48CC68EE681D57648DFE6DE8EBA5398.asc"],
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v1.2.2 (MingW32)\u000d\u000a\u000d\u000aiQEVAwUATrAOl0jf5t6OulOYAQJpjwgAvyl/HLyvzJ6S9wZiHgTrqvrobFgTCnBV\u000d\u000ao8ed9YWuoUPydEtOCk8xJbYm5v3ON1sqJkXQSkwpp7R1mI/mB3yb2YWHZTn8V/mC\u000d\u000aQlAyXlBRfbdG/r5F34mSLmO5SMSc8iVM24Xyrsb8/OJPlTfvCDNlYylXrWUD8Bsa\u000d\u000aLJf8UZi1F8c1bkFxSIL10dohWluUWonlKLhknSvewC6mSAGzWwxIiZsvi1bXCYuq\u000d\u000a55TcZizC7xbNxVRjLK8xvpikER5iq+EVPcADvNNc5faAxLmxWAGQ6zBHhctniWYj\u000d\u000a1nn+PCxDVUx77zY+lh3fgRhltxpsnUe8EmialKKfRdBnqrBYIBKJ6g==\u000d\u000a=pXCI\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "identity": {
        "submitter": "ADL 3D Repository",
        "signer": "ADL",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "weight": 100,
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "d7df3981be224760a71a98ce885d42a6"
}, {
    "_id": "93e8f5f4ea944eef8da5ccbff7e98449",
    "_rev": "1-272326629c37e3ee5479a62688a22ab9",
    "resource_data": {
        "activity": {
            "content": "The current number of 'views' for this object in the ADL 3DR",
            "verb": {
                "action": "Viewed",
                "date": "/Date(1320092789453)/",
                "context": {},
                "measure": {
                    "measureType": "count",
                    "value": "926"
                }
            },
            "related": [],
            "object": {
                "id": "adl:667"
            }
        }
    },
    "keys": ["3DR", "Buffalo", "Military", "Vehicle", "Mine", "Protection", "Armor"],
    "payload_placement": "inline",
    "resource_TTL": 0,
    "node_timestamp": "2011-10-31T20:26:52.174003Z",
    "create_timestamp": "2011-10-31T20:26:52.174003Z",
    "update_timestamp": "2011-10-31T20:26:52.174003Z",
    "active": true,
    "publishing_node": "435e64e986af4614b92e77826c29439a",
    "resource_locator": "http://3dr.adlnet.gov/api/rest/adl:667/Format/dae?ID=00-00-00",
    "digital_signature": {
        "key_location": ["http://3dr.adlnet.gov/dev/52F0ADE4F48CC68EE681D57648DFE6DE8EBA5398.asc"],
        "signing_method": "LR-PGP.1.0",
        "signature": "-----BEGIN PGP SIGNATURE-----\u000d\u000aVersion: GnuPG v1.2.2 (MingW32)\u000d\u000a\u000d\u000aiQEVAwUATq8EfEjf5t6OulOYAQKfHwgAoq3uidLqTWvrVJ/XYtalARoXoo2CmhhN\u000d\u000aP1rEeFfw9JLA77G+k3OtQh96r1t92R7CqG+Y+Sn1daVteTRDQwd17GKj4b8iF7gu\u000d\u000a9qPb7Ou8YZnSrCUCU3yoqzaF7oYE5cjOM2ZE+gGJRkjBkhk/o3aikD2rHGeOPNKD\u000d\u000aK3jJsY551v6QRC7XQkKYNelE2h0BT6h0wmEecLC7ojSNlcyNe9Yx3/hPGsfjITWk\u000d\u000aBQ7VaR+bqHTco0dDRBiMd345azC9Oxd0BnThsUtgTL9VPskThiwXkhOwXbsEFxqD\u000d\u000aGmvSNTW61MP2m0/fhuud2ceA+K4OhjTzjz13lBlIlHHsh1kTgwi1gg==\u000d\u000a=tx9b\u000d\u000a-----END PGP SIGNATURE-----\u000d\u000a"
    },
    "identity": {
        "submitter": "ADL 3D Repository",
        "signer": "ADL",
        "submitter_type": "agent"
    },
    "doc_type": "resource_data",
    "weight": 100,
    "resource_data_type": "paradata",
    "payload_schema": ["LR Paradata 1.0"],
    "doc_version": "0.23.0",
    "doc_ID": "93e8f5f4ea944eef8da5ccbff7e98449"
}];

      for (idx=0; idx<lr_data.length; idx++) {
        var d = lr_data[idx];
        d["_id"] = d["doc_ID"] = idx+1;
        $.jscouch.couchdb.put(d);
      }

      // $.jscouch.couchdb.put({ 
      //   name: 'snow.png', 
      //   created_at: new Date(now + millisInHHour*Math.random()).toUTCString(),
      //   user: 'john',
      //   type: 'png', 
      //   camera: 'canon',
      //   info: {
      //     width: 64, 
      //     height: 64, 
      //     size: 1253
      //   },
      //   tags: [ 'tahoe', 'powder' ]
      // });
      // $.jscouch.couchdb.put({ 
      //   name: 'hawaii.png', 
      //   created_at: new Date(now + millisInHHour*Math.random()).toUTCString(),
      //   user: 'john',
      //   type: 'png', 
      //   camera: 'nikon',
      //   info: {
      //     width: 128, 
      //     height: 64, 
      //     size: 92834
      //   },
      //   tags: [ 'maui', 'tuna' ]
      // });
      // $.jscouch.couchdb.put({ 
      //   name: 'hawaii.gif', 
      //   created_at: new Date(now + millisInHHour*Math.random()).toUTCString(),
      //   user: 'bob',
      //   type: 'gif', 
      //   camera: 'canon',
      //   info: {
      //     width: 320, 
      //     height: 128, 
      //     size: 49287
      //   },
      //   tags: [ 'maui' ]
      // });
      // $.jscouch.couchdb.put({ 
      //   name: 'island.gif', 
      //   created_at: new Date(now + millisInHHour*Math.random()).toUTCString(),
      //   user: 'zztop',
      //   type: 'gif', 
      //   camera: 'nikon',
      //   info: {
      //     width: 640, 
      //     height: 480, 
      //     size: 50398
      //   },
      //   tags: [ 'maui' ]
      // });
    }
  });
})(jQuery);
