// import { screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
// import { render } from '@testing-library/react';

// const inputValue = 'Tatooine'; // Valor para pesquisar
// const operator = '10000'; // Valor para o número
// const validOperator = 'maior que'; // Operador válido para teste

// test('Ao acessar a rota / a tabela é renderizada', async () => {
//   await render(<App />);

//   // Espera até que o elemento com data-testid="name-filter" seja renderizado no DOM
//   await waitFor(() => {
//     expect(screen.getByTestId('name-filter')).toBeInTheDocument();
//   }, { timeout: 10000 });

//   const inputSearch = screen.getByTestId('name-filter');
//   const selectColumn = screen.getByTestId('column-filter');
//   const selectOperator = screen.getByTestId('comparison-filter');
//   const inputNumber = screen.getByTestId('value-filter');
//   const filterButton = screen.getByTestId('button-filter');

//   await userEvent.type(inputSearch, inputValue);
//   expect(inputSearch).toHaveValue(inputValue);

//   userEvent.selectOptions(selectColumn, 'diameter');
//   userEvent.selectOptions(selectOperator, validOperator);
//   await userEvent.type(inputNumber, operator);
//   expect(inputNumber).toEqual(parseFloat(operator));

//   userEvent.click(filterButton);

//   // Espera até que o próximo estado do componente (após a filtragem) seja renderizado no DOM
//   await waitFor(() => {
//     expect(screen.getByText('Nome do Planeta')).toBeInTheDocument();
//     // Adicione aqui as expectativas para verificar se os resultados estão corretos após a filtragem.
//   });
// });


// // test('Teste se o botao fica desabilitado com login correto e senha errados', async () => {
// //   render(<App />);

// //   const loginInput = screen.getByTestId(testEmail);
// //   const passwrodInput = screen.getByTestId(testPassword);
// //   expect(loginInput).toBeInTheDocument();
// //   expect(passwrodInput).toBeInTheDocument();

// //   await userEvent.type(loginInput, userEmail);
// //   expect(loginInput).toHaveValue(userEmail);
// //   await userEvent.type(passwrodInput, wrongPass);
// //   expect(passwrodInput).toHaveValue(wrongPass);

// //   const loginButton = screen.getByRole('button');
// //   expect(loginButton).not.toBeEnabled();
// // });

// // test('Teste se o botao fica desabilitado com login errado e senha correta', async () => {
// //   render(<App />);

// //   const loginInput = screen.getByTestId(testEmail);
// //   const passwrodInput = screen.getByTestId(testPassword);
// //   expect(loginInput).toBeInTheDocument();
// //   expect(passwrodInput).toBeInTheDocument();

// //   await userEvent.type(loginInput, userEmail);
// //   expect(loginInput).toHaveValue(userEmail);
// //   await userEvent.type(passwrodInput, wrongPass);
// //   expect(passwrodInput).toHaveValue(wrongPass);

// //   const loginButton = screen.getByRole('button');
// //   expect(loginButton).not.toBeEnabled();
// // });

// // test('Teste se o botao fica desabilitado com login errado e senha certa', async () => {
// //   render(<App />);

// //   const loginInput = screen.getByTestId(testEmail);
// //   const passwrodInput = screen.getByTestId(testPassword);
// //   expect(loginInput).toBeInTheDocument();
// //   expect(passwrodInput).toBeInTheDocument();

// //   await userEvent.type(loginInput, wrongEmail);
// //   expect(loginInput).toHaveValue(wrongEmail);
// //   await userEvent.type(passwrodInput, userPassword);
// //   expect(passwrodInput).toHaveValue(userPassword);

// //   const loginButton = screen.getByRole('button');
// //   expect(loginButton).not.toBeEnabled();
// // });
