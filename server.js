const express = require('express'),
    path = require('path'),
    sgMail = require('@sendgrid/mail'),
    bodyParser = require('body-parser');

const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const indexFilePath = '/dist/apartment-credits-app/index.html';
const businessEmailAddress = `vasiliyutkin13121991@gmail.com`;

app.use(express.static('./dist/apartment-credits-app'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, indexFilePath));
});

app.post('/sendMail', (req, res) => {
    sgMail.send({
        to: businessEmailAddress,
        from: 'apartment-credits-app@mail.com',
        subject: 'Контактные Данные Клиента',
        text: 'Данные, необходимые для связи с клиентом',
        html: `
            <strong>Номер Телефона Клиента: </strong> ${req.body.tel} <br /> <br />
            <strong>ФИО клиента: </strong> ${req.body.fio}
        `,
    });
    res.end();
});

app.listen(process.env.PORT || 8080);