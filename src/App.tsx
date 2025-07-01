type Person = {
  firstName: string;
  lastName: string;
};

export function App() {
  const people: Person[] = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>

        <tbody>
          {people.map((person) => (
            <tr>
              <td>
                <input value={person.firstName} />
              </td>
              <td>
                <input value={person.lastName} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
