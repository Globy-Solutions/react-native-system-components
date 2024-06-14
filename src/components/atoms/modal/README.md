# @globy-solutions/react-native-system-components

Globy Solutions - React Native System Components

## Modal implementation

```js
import { Modal } from '@globy-solutions/react-native-system-components';

const [modalVisible, setModalVisible] = useState<boolean>(false);
const showModal = () => setModalVisible(!modalVisible);

<Modal show={modalVisible} onClose={showModal} style={screenStyles.modal}>
  <Text>Hello World!</Text>
</Modal>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
