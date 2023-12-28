import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

export default function App () {
  const users = [
    {
      userName: 'sveltejs',
      name: 'Svelte',
      initialIsFollowing: false,
      id: 1
    },
    {
      userName: 'midudev',
      name: 'Miguel Angel Durán',
      initialIsFollowing: true,
      id: 2
    },
    {
      userName: 'goncy',
      name: 'Gonzalo Pozzo',
      initialIsFollowing: false,
      id: 3
    },
    {
      userName: 'angular',
      name: 'Angular',
      initialIsFollowing: true,
      id: 4
    },
    {
      userName: 'mouredev',
      name: 'MoureDev',
      initialIsFollowing: false,
      id: 5
    },
    {
      userName: 'freeCodeCamp',
      name: 'freeCodeCamp',
      initialIsFollowing: true,
      id: 6
    },
    {
      userName: 'reactjs',
      name: 'React',
      initialIsFollowing: false,
      id: 7
    },
    {
      userName: 'vuejs',
      name: 'Vue',
      initialIsFollowing: false,
      id: 8
    }
  ];
  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
