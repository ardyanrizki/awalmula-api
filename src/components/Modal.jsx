import Modal, {
  useModalState,
  modalAnimation
} from "react-simple-modal-provider";
import { Link } from 'react-router-dom'
import shoppingBag from '../assets/shopping-bag.png'

export default function AddCartModal ({ children }) {
  const [isOpen, setOpen] = useModalState();

  return (
    <Modal
      id={"add-cart-modal"}
      consumer={children}
      isOpen={isOpen}
      setOpen={setOpen}
      duration={250}
      animation={modalAnimation.slideDown}
    >
      <div className="modal-body">
        <img src={shoppingBag} alt="modal illustration" />
        <p>Produk telah ditambahkan</p>
        <Link to="/cart" onClick={() => setOpen(false)} className="button button-primary">Lihat Keranjang</Link>
        <button onClick={() => setOpen(false)}>Tutup</button>
      </div>
    </Modal>
  );
};
