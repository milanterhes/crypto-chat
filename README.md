# Crypto Chat Challenge

## Requirements

- Typescript
- Functional Components (no classes)
- Small frontend for a chat application
    - use react-bootstrap (bootstrap)
    - use Sass for styling / overwriting bootstrap vars
    - needs to work on mobile (responsive)
    - similar colors / styles to wax.atomichub.io
    - does not need to be super fancy, just something which does not look completely default
- See a chat history which auto refreshes every few seconds and pulls new messages from the blockchain
- Being able to login with either Wax Cloud Wallet (wallet.wax.io) or Anchor (https://greymass.com/anchor) for account management
- Being able to submit new messages
- Allow users to edit own messages
- Allowing user to scroll up which will load history messages


## Todos
- [x] Setup Bootstrap and scss
- [ ] Create UI components
  - [ ] Chat Room
  - [ ] Chat Message
  - [ ] Input
  - [ ] Login?
- [ ] Setup blockchain integration libraries
- [ ] Setup login
- [ ] Setup message fetching
  - [ ] Fetch on page open (X number of most recent)
  - [ ] Load more when scrolling up
- [ ] Setup message sending
- [ ] Setup message editing