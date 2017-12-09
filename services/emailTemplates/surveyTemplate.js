const keys = require('./../../config/keys');

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h2>We would like your feedback!<h2>
          <p>Please help us by answering the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
