import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { render } from '@testing-library/react';

const userEmail = 'tryber@trybe.com';
const userPassword = '111111';
const testEmail = 'email-input';
const testPassword = 'password-input';
const wrongPass = '1111';
const wrongEmail = 'jairo@00';

test('Ao acessar a rota / o Login é renderizado', async () => {
  render(<App />);

  const loginInput = screen.getByTestId(testEmail);
  const passwrodInput = screen.getByTestId(testPassword);
  expect(loginInput).toBeInTheDocument();
  expect(passwrodInput).toBeInTheDocument();

  await userEvent.type(loginInput, userEmail);
  expect(loginInput).toHaveValue(userEmail);
  await userEvent.type(passwrodInput, userPassword);
  expect(passwrodInput).toHaveValue(userPassword);

  const loginButton = screen.getByRole('button');
  expect(loginButton).toBeEnabled();
  await userEvent.click(loginButton);
});

test('Teste se o botao fica desabilitado com login correto e senha errados', async () => {
  renderWithRouterAndRedux(<App />);

  const loginInput = screen.getByTestId(testEmail);
  const passwrodInput = screen.getByTestId(testPassword);
  expect(loginInput).toBeInTheDocument();
  expect(passwrodInput).toBeInTheDocument();

  await userEvent.type(loginInput, userEmail);
  expect(loginInput).toHaveValue(userEmail);
  await userEvent.type(passwrodInput, wrongPass);
  expect(passwrodInput).toHaveValue(wrongPass);

  const loginButton = screen.getByRole('button');
  expect(loginButton).not.toBeEnabled();
});

test('Teste se o botao fica desabilitado com login errado e senha correta', async () => {
  renderWithRouterAndRedux(<App />);

  const loginInput = screen.getByTestId(testEmail);
  const passwrodInput = screen.getByTestId(testPassword);
  expect(loginInput).toBeInTheDocument();
  expect(passwrodInput).toBeInTheDocument();

  await userEvent.type(loginInput, userEmail);
  expect(loginInput).toHaveValue(userEmail);
  await userEvent.type(passwrodInput, wrongPass);
  expect(passwrodInput).toHaveValue(wrongPass);

  const loginButton = screen.getByRole('button');
  expect(loginButton).not.toBeEnabled();
});

test('Teste se o botao fica desabilitado com login errado e senha certa', async () => {
  renderWithRouterAndRedux(<App />);

  const loginInput = screen.getByTestId(testEmail);
  const passwrodInput = screen.getByTestId(testPassword);
  expect(loginInput).toBeInTheDocument();
  expect(passwrodInput).toBeInTheDocument();

  await userEvent.type(loginInput, wrongEmail);
  expect(loginInput).toHaveValue(wrongEmail);
  await userEvent.type(passwrodInput, userPassword);
  expect(passwrodInput).toHaveValue(userPassword);

  const loginButton = screen.getByRole('button');
  expect(loginButton).not.toBeEnabled();
});
