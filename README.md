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
- [x] Create UI components
  - [x] Chat Room
  - [x] Chat Message
  - [x] Input
  - [x] Login?
- [x] Setup blockchain integration libraries
- [x] Setup login
- [x] Setup message fetching
  - [x] Fetch on page open (X number of most recent)
  - [x] Fetch messages every few seconds
  - [x] Load more when scrolling up
- [x] Setup message sending
- [x] Setup message editing
- [x] Setup chatroom changing