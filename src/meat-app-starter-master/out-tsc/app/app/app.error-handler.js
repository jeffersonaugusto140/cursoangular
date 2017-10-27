import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        var erroMessage;
        if (error instanceof Response) {
            erroMessage = "Erro " + error.status + " ao obter a URL " + error.url + " - " + error.statusText;
        }
        else {
            erroMessage = error.toString();
        }
        console.log(erroMessage);
        return Observable.throw(erroMessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map