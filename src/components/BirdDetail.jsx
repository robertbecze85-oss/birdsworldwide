import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, MapPin } from 'lucide-react';
import { getSpeciesImage } from '../services/xenoCanto';

const BirdDetail = ({ bird, onClose }) => {
    if (!bird) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="glass-panel"
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '350px',
                    height: 'calc(100% - 40px)',
                    zIndex: 2000,
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto'
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        alignSelf: 'flex-end', background: 'none', border: 'none', color: 'white', cursor: 'pointer'
                    }}
                >
                    <X size={24} />
                </button>

                {/* Image Section */}
                <div style={{
                    width: '100%', height: '200px', borderRadius: '12px', overflow: 'hidden',
                    marginBottom: '20px', backgroundColor: '#000', position: 'relative'
                }}>
                    <img
                        src={getSpeciesImage(bird.gen + ' ' + bird.sp + ' bird photography')}
                        alt={bird.en}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#222' }}
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/350x200?text=No+Image' }}
                    />
                    <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        padding: '10px'
                    }}>
                        <span style={{ fontSize: '12px', color: '#ccc' }}>Photo by Bing Search</span>
                    </div>
                </div>

                <h2 style={{ margin: '0 0 5px 0', fontSize: '24px' }}>{bird.en}</h2>
                <h3 style={{ margin: '0 0 20px 0', fontSize: '16px', color: 'var(--accent-color)', fontStyle: 'italic' }}>
                    {bird.gen} {bird.sp}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#cbd5e1' }}>
                    <MapPin size={18} />
                    <span>{bird.loc}, {bird.cnt}</span>
                </div>

                <div className="glass-panel" style={{ padding: '15px', background: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <Music size={18} color="var(--accent-color)" />
                        <span style={{ fontWeight: 'bold' }}>Bird Call</span>
                    </div>
                    {/* Xeno-canto file URL */}
                    <audio controls style={{ width: '100%' }} src={bird.file} autoPlay>
                        Your browser does not support the audio element.
                    </audio>
                    <div style={{ marginTop: '10px', fontSize: '12px', color: '#94a3b8' }}>
                        Recorded by: {bird.rec}
                    </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <h4 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '5px' }}>Details</h4>
                    <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
                        <li><strong>Altitude:</strong> {bird.alt}m</li>
                        <li><strong>Date:</strong> {bird.date}</li>
                        <li><strong>Time:</strong> {bird.time}</li>
                        <li><strong>Quality:</strong> {bird.q}</li>
                        <li><strong>Type:</strong> {bird.type}</li>
                    </ul>
                </div>

            </motion.div>
        </AnimatePresence>
    );
};

export default BirdDetail;
