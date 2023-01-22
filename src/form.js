
'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    if (this.state.liked) {
      return (
        <div className={'modal'}
          onClick={() => this.setState({ liked: false })}>
          <div className = {'modal__content'}
            onClick = {e => e.stopPropagation()}>
            <form action="https://formcarry.com/s/i9EtQjA3zV1" method="POST" acceptCharset="UTF-8" id="form">
              <div>
                <input className = "form-form-elem"
                  id = "form-name"
                  type = "text"
                  name = "name"
                  required
                  placeholder="Ваше имя" />
              </div>
              <div>
                <input className = "form-form-elem"
                  id = "form-phone"
                  type = "tel"
                  name = "phone"
                  required
                  placeholder="Телефон" />
              </div>
              <div>
                <input className = "form-form-elem"
                  id = "form-email"
                  type = "email"
                  name = "email"
                  required
                  placeholder="E-mail" />
              </div>
              <div>
                <input id = "form-comment"
                  className = "form-form-elem"
                  type = "text"
                  placeholder = "Ваш комментарий" />
              </div>
              <div className = "form-checkbox" >
                <input className = "checkbox-input"
                  type = "checkbox"
                  id = "userAgreement" />
                <label
                  className="checkbox__label"
                  type = "text"
                  htmlFor="userAgreement" > Отправляя заявку я даю согласие на <a> обработку своих персональных данных </a>
                </label>
              </div>
              <div>
                <input className = "form-form-btn"
                  type="submit"
                  value={"ОСТАВИТЬ ЗАЯВКУ!"}/>
              </div>
            </form>
          </div>
          </div>
      )
    }

    return (
      <div>
        <input onClick={() =>this.setState({ liked: true })}
          className = "plans-btn"
          type = "button"
          value = "ОСТАВИТЬ ЗАЯВКУ!!!" />
      </div>
    );
  }
}

let domContainer = document.querySelector('#modal');
ReactDOM.render(<LikeButton /> ,domContainer);
