import axios from 'axios';
// import { UsualText } from '../Components/Footer/FooterComponents/CorporateOrders/style';
// import CooperationsWithUs from '../Components/Footer/CooperationWithUs/CooperationWithUs';
// import { LogosCompanyCooperationWith } from '../Components/Footer/CooperationWithUs/style';
// import React from 'react';

export const SetSubscriberEmail = email => {
	const data = {
		email,
		letterSubject: 'Registration Letter',
		letterHtml: `
		<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Pricing table</title>
    <!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css"/>-->
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Arimo:400,700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/all.css" />
	<script src="https://kit.fontawesome.com/983e472358.js"></script>
	<style>
	table{
		table-layout: auto;
		width:1140px;
		
		border-collapse: collapse;
		box-shadow: 0 0 0 22px #3a4965;
	}
	tr{
		width: 277px;
		border: 1px solid #e2e2e2;
		font-family: 'Arimo', sans-serif;
	}
	/*-----------------------------------------head*/
	th{
		background: #fafafa;
		width: 279px;
		height: 69px;
		border: 1px solid #e2e2e2;
		font-size: 50px;
		}
	.header-low th{
		position: relative;
	}
	
	img{
		width: 200px;
		height: 200px;
	}
	
	.header-low th:after{
	
		content: 'PER MONTH';
		font-size: 14px;
	}
	.header-low th:before{
		content: '.99';
		font-size: 18px;
		font-weight: bold;
		position: absolute;
		right:117px;
		top:14px;
	}
	.header>th{
		height: 69px;
		font-weight: bold;
		font-size: 14px;
		text-transform: uppercase;
		}
	
	.header th:first-child:after{
		content: 'pricing plan';
		font-size: 22px;
		font-weight: bold;
	}
	.header th:nth-child(2){
		background: #89c331;
		color: white;
		font-size: 18px;
		border-color: #89c331;
		text-transform: uppercase;
		}
	.header th:hover:nth-child(2){
		cursor: pointer;
		font-size: 22px;
		box-shadow:1px -1px 0 1px #89c331;
		position: relative;
		z-index: 2;
	}
	.header th:nth-child(3) {
		background: #f04a56;
		color: white;
		font-size: 18px;
		border-color: #f04a56;
		text-transform: uppercase;
	}
	.header th:hover:nth-child(3){
		cursor: pointer;
		font-size: 22px;
		box-shadow:1px -1px 0 1px #f04a56;
		position: relative;
		z-index: 2;
	}
	.header th:nth-child(4) {
		background: #20807c;
		color: white;
		font-size: 18px;
		border-color: #20807c;
		text-transform: uppercase;
	}
	.header th:hover:nth-child(4){
		cursor: pointer;
		font-size: 22px;
		box-shadow:1px -1px 0 1px #20807c;
		position: relative;
		z-index: 2;
	}
	/*-----------------------------------------foot*/
	tfoot tr td:first-child{
		height: 110px;
		display: flex;
	}
	input{
		margin: auto;
	}
	tfoot tr td:first-child {
		background: #dddddd;
	}
	tfoot tr td {
		background: #eeeeee;
	}
	tfoot tr td:hover {
		background:#f4f4f4;
		cursor: pointer;
	}
	.footer_submit{
		height: 49px;
		width: 192px;
		color: white;
		text-transform: uppercase;
		border-radius: 5px;
		border: none;
	}
	.footer_submit_first {
		background-color: #484848;
	}
	.footer_submit_second{
		background-color: #89c331;
	}
	.footer_submit_third{
		background-color: #f04a56;
	}
	.footer_submit_forth{
		background-color: #20807c;
	}
	.footer_submit_first:hover{
		box-shadow: inset 0 -5px 0 0 #404040;
	}
	.footer_submit_second:hover{
		box-shadow: inset 0 -5px 0 0 #79b027;
	}
	.footer_submit_third:hover{
		box-shadow: inset 0 -5px 0 0 #df3a46;
	}
	.footer_submit_forth:hover{
		box-shadow: 0 -5px 0 0 #16736f inset;
	}
	/*-----------------------------------------body*/
	td{
		border: 1px solid #e2e2e2;
		text-align: center;
		text-transform: uppercase;
		color: #484848;
		font-size: 17px;
		font-weight: bold;
	}
	tbody tr:nth-child(2n) {
		background: #e3e3e3;
	}
	tbody tr:nth-child(2n+1) {
		background: #f2f2f2;
	}
	.fas::before{
		display: inline-block;
		padding-right: 13px;
		color:#848484;
	}
	.fa-archive{
		font-size: 21px;
	}
	.fa-cloud-upload-alt{
		font-size: 19px;
	}
	.fa-envelope{
		font-size: 20px;
	}
	.fa-life-ring{
		font-size: 25px;
	}
	.fa-cube{
		font-size: 23px;
	}
	.fa-users{
		font-size: 25px;
	}
	</style>
  </head>
	

  <body>
    <table>
      <thead>
        <tr class="header">
          <th rowspan="2"><img src="https://res.cloudinary.com/dnorz3pyf/image/upload/v1592913581/backgroundImage/153337_uvjes9.jpg" alt="#"><br /></th>
		  <th>WATCH NIXON X METALLICA TIME TELLER
		 {<img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/jpmorganchase.png?auto=format&q=60&fit=max&w=930'/>}

		  </th>
          <th>WATCH NIXON RE-RUN GOLD</th>
          <th>WATCH NIXON RE-RUN SILVER</th>
        </tr>

        <tr class="header-low">
          <th><img src="https://res.cloudinary.com/dnorz3pyf/image/upload/v1587806014/Watch/Nixon/Nixon%20NIXON%20x%20Metallica%20Time%20Teller/a045-3108-view1_2__jwkwcz.jpg" alt="#"></th>
          <th><img src="https://res.cloudinary.com/dnorz3pyf/image/upload/v1587807692/Watch/Nixon/Nixon%20Re-Run%20All%20Gold/a158-502-view1_2_oiirfi.jpg" alt="#"</th>
          <th><img src="https://res.cloudinary.com/dnorz3pyf/image/upload/v1587806872/Watch/Nixon/Nixon%20Re-Run%20Silver/a158-000-view1_yqp68f.jpg" alt="#"</th>
        </tr>
      </thead>
      <tfoot>
        <tr class="as">
          <td>
            <input
              type="submit"
              value="contact us"
              class="footer_submit footer_submit_first"
            />
          </td>
          <td>
            <input
              type="submit"
              value="buy now"
              class="footer_submit footer_submit_second"
            />
          </td>
          <td>
            <input
              type="submit"
              value="buy now"
              class="footer_submit footer_submit_third"
            />
          </td>
		  <td>
		  		<input
              type="submit"
              value="buy now"
              class="footer_submit footer_submit_forth"
            /> 
          </td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>PRICE</td>
          <td>5999₴</td>
          <td>3459₴</td>
          <td>3499₴e</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
		`,
	};
	return axios
		.post('api/subscribers', JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.catch(error => error.response.data.message);
};
