import React, { useState, useRef } from 'react';
import { 
  X, 
  Upload, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  Check, 
  RotateCcw, 
  Sparkles, 
  Layers, 
  Sliders, 
  Eye, 
  Trash2,
  Building2,
  Users,
  ShieldAlert,
  Video
} from 'lucide-react';

export interface HeroImagePreset {
  id: string;
  name: string;
  category: string;
  url: string;
  description: string;
}

export const CURATED_HERO_PRESETS: HeroImagePreset[] = [
  {
    id: 'nairobi-towers',
    name: 'Nairobi Financial Towers',
    category: 'Sovereign Architecture',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    description: 'Corporate glass architectural headquarters at the center of East African financial networks.',
  },
  {
    id: 'boardroom-advisory',
    name: 'Executive Boardroom & Syndicate',
    category: 'Strategic PR Advisory',
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
    description: 'High-level institutional counsel and stakeholder engagement for blue-chip enterprises.',
  },
  {
    id: 'crisis-command',
    name: '24/7 Crisis Operations Console',
    category: 'Reputation Shield',
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    description: 'High-tech telemetry and narrative monitoring protecting market stature in real time.',
  },
  {
    id: 'cinema-suite',
    name: '4K Broadcast Cinema Rig',
    category: 'Cinematic Media Node',
    url: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1600&q=80',
    description: 'Industrial cinematography and broadcast master suite engineering authoritative visual stories.',
  },
  {
    id: 'pan-african-skyline',
    name: 'Metropolitan Horizon & Capital Corridor',
    category: 'Pan-African Reach',
    url: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=80',
    description: 'Regional financial corridors connecting East African enterprises to global syndicates.',
  },
  {
    id: 'press-conference',
    name: 'Tier-1 Press Conference & Wires',
    category: 'Media Relations',
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80',
    description: 'High-profile press syndication and executive statements commanded with authority.',
  }
];

export type HeroDisplayMode = 'card-backdrop' | 'full-banner' | 'split-visual';

interface HeroImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSlideIndex: number;
  slides: { id: string; titleLine1: string; titleLine2: string; badge: string }[];
  currentImages: Record<string, string>;
  onSaveImage: (slideId: string, imageUrl: string) => void;
  onApplyToAllSlides: (imageUrl: string) => void;
  onResetImages: () => void;
  displayMode: HeroDisplayMode;
  onChangeDisplayMode: (mode: HeroDisplayMode) => void;
  imageOpacity: number;
  onChangeOpacity: (opacity: number) => void;
}

export const HeroImageModal: React.FC<HeroImageModalProps> = ({
  isOpen,
  onClose,
  activeSlideIndex,
  slides,
  currentImages,
  onSaveImage,
  onApplyToAllSlides,
  onResetImages,
  displayMode,
  onChangeDisplayMode,
  imageOpacity,
  onChangeOpacity,
}) => {
  const [selectedSlideId, setSelectedSlideId] = useState<string>(slides[activeSlideIndex]?.id || 'slide-1');
  const [urlInput, setUrlInput] = useState('');
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [previewImage, setPreviewImage] = useState<string>(currentImages[selectedSlideId] || '');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const currentSlideObj = slides.find((s) => s.id === selectedSlideId) || slides[0];

  const handleSelectSlideTab = (slideId: string) => {
    setSelectedSlideId(slideId);
    setPreviewImage(currentImages[slideId] || '');
    setStatusMessage(null);
  };

  // Handle local image file upload (converts to Base64)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setStatusMessage('Please select a valid image file (PNG, JPG, WebP, etc.).');
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setStatusMessage('File is too large. Please select an image under 8MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPreviewImage(dataUrl);
        onSaveImage(selectedSlideId, dataUrl);
        setStatusMessage('Image successfully uploaded and applied to current slide!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    const trimmed = urlInput.trim();
    if (!trimmed) {
      setStatusMessage('Please enter an image URL.');
      return;
    }
    setPreviewImage(trimmed);
    onSaveImage(selectedSlideId, trimmed);
    setStatusMessage('Web image successfully linked and applied!');
    setUrlInput('');
  };

  const handleSelectPreset = (presetUrl: string) => {
    setPreviewImage(presetUrl);
    onSaveImage(selectedSlideId, presetUrl);
    setStatusMessage('Preset visual successfully applied!');
  };

  const handleApplyCurrentToAll = () => {
    if (!previewImage) {
      setStatusMessage('No image is currently selected to apply across all slides.');
      return;
    }
    onApplyToAllSlides(previewImage);
    setStatusMessage('Image applied across all 4 hero slides!');
  };

  const handleRemoveImage = () => {
    onSaveImage(selectedSlideId, '');
    setPreviewImage('');
    setStatusMessage('Image removed from this slide.');
  };

  return (
    <div className="fixed inset-0 z-[120] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      <div 
        className="bg-white border border-slate-200 text-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ring-1 ring-black/10"
        role="dialog"
        aria-modal="true"
        aria-label="Add or Customize Hero Section Images"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#0a1829] text-white flex items-center justify-between border-b border-[#15304f]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d89e28]/20 border border-[#d89e28]/40 flex items-center justify-center text-[#d89e28]">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase font-bold text-[#d89e28] tracking-widest">
                  VISUAL ARCHITECTURE MANAGER
                </span>
                <span className="text-[9.5px] bg-[#15304f] text-slate-300 px-2 py-0.5 rounded-full border border-slate-600 font-mono">
                  Hero Section
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-black text-white">
                Add &amp; Configure Hero Images
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Target Selector Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 p-2 sm:px-4 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-500 mr-1 hidden sm:inline">
              Select Slide:
            </span>
            {slides.map((s, idx) => {
              const isSelected = s.id === selectedSlideId;
              const hasCustomImg = !!currentImages[s.id];
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSlideTab(s.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#0a1829] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                >
                  <span>Slide 0{idx + 1}</span>
                  {hasCustomImg && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d89e28]" title="Image Configured" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={handleApplyCurrentToAll}
              className="text-[10.5px] font-mono font-bold text-[#b47a16] hover:text-[#0a1829] px-2 py-1 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 transition-colors cursor-pointer whitespace-nowrap"
              title="Apply this image across all 4 slides"
            >
              Apply to All Slides
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Status Message Notification */}
          {statusMessage && (
            <div className="p-3 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl text-xs flex items-center justify-between gap-2 animate-fadeIn">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d89e28] shrink-0" />
                <span className="font-semibold">{statusMessage}</span>
              </div>
              <button 
                onClick={() => setStatusMessage(null)}
                className="text-amber-800 hover:text-amber-950 font-bold text-xs"
              >
                &times;
              </button>
            </div>
          )}

          {/* Current Slide Info & Live Preview Strip */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-20 h-14 sm:w-28 sm:h-18 rounded-xl overflow-hidden border border-slate-300 bg-slate-200 shrink-0 shadow-2xs">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-[10px]">
                    <ImageIcon className="w-4 h-4 mb-0.5" />
                    <span>No Image</span>
                  </div>
                )}
                {previewImage && (
                  <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[8px] font-mono px-1 rounded">
                    Active
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold text-[#b47a16] uppercase block">
                  Target: {currentSlideObj.badge}
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 truncate">
                  {currentSlideObj.titleLine1} {currentSlideObj.titleLine2}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {previewImage ? 'Custom image loaded for this slide' : 'Using default graphic canvas'}
                </p>
              </div>
            </div>

            {previewImage && (
              <button
                onClick={handleRemoveImage}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove Image</span>
              </button>
            )}
          </div>

          {/* Add Image Options: Tabs (Upload / URL / Presets) */}
          <div>
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-4">
              <button
                onClick={() => setActiveTab('upload')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'upload'
                    ? 'bg-[#0a1829] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload From Computer</span>
              </button>

              <button
                onClick={() => setActiveTab('url')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'url'
                    ? 'bg-[#0a1829] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Image Web URL</span>
              </button>

              <button
                onClick={() => setActiveTab('presets')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'presets'
                    ? 'bg-[#0a1829] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d89e28]" />
                <span>Curated Presets</span>
              </button>
            </div>

            {/* TAB 1: File Upload */}
            {activeTab === 'upload' && (
              <div className="space-y-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/webp, image/svg+xml"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-300 hover:border-[#d89e28] bg-slate-50 hover:bg-amber-50/40 rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#0a1829] border border-slate-200 group-hover:border-[#0a1829] flex items-center justify-center text-slate-500 group-hover:text-[#d89e28] shadow-xs transition-colors mb-3">
                    <Upload className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                    Click to browse and upload photo from device
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm">
                    Supports high-resolution PNG, JPG, or WebP files. Images are processed locally and saved in your browser for this session.
                  </p>
                  <button
                    type="button"
                    className="mt-4 px-4 py-2 bg-[#d89e28] hover:bg-[#c48e22] text-[#0a1829] font-black text-xs uppercase tracking-wider rounded-xl shadow-xs transition-colors"
                  >
                    Select Image File
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: URL Input */}
            {activeTab === 'url' && (
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="Paste image URL (https://images.unsplash.com/... or your CDN)"
                      className="w-full pl-9.5 pr-4 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-hidden focus:border-[#d89e28] focus:ring-2 focus:ring-[#d89e28]/20 text-slate-800"
                    />
                  </div>
                  <button
                    onClick={handleApplyUrl}
                    className="px-5 py-2.5 bg-[#0a1829] hover:bg-[#15304f] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shrink-0"
                  >
                    Apply URL
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">
                  Tip: You can use any direct image URL from Unsplash, Google Drive, or your company image hosting.
                </p>
              </div>
            )}

            {/* TAB 3: Curated Presets */}
            {activeTab === 'presets' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {CURATED_HERO_PRESETS.map((preset) => {
                  const isCurrent = previewImage === preset.url;
                  return (
                    <div
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset.url)}
                      className={`group relative rounded-xl overflow-hidden border p-2 cursor-pointer transition-all flex flex-col justify-between ${
                        isCurrent
                          ? 'border-[#d89e28] bg-amber-50/70 shadow-sm ring-2 ring-[#d89e28]/30'
                          : 'border-slate-200 bg-white hover:border-slate-400 hover:shadow-2xs'
                      }`}
                    >
                      <div className="relative h-24 w-full rounded-lg overflow-hidden mb-2 bg-slate-100">
                        <img
                          src={preset.url}
                          alt={preset.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-1.5 left-1.5 bg-[#0a1829]/80 text-white text-[8px] font-mono px-1.5 py-0.5 rounded font-bold">
                          {preset.category}
                        </span>
                        {isCurrent && (
                          <span className="absolute top-1.5 right-1.5 bg-[#d89e28] text-[#0a1829] p-0.5 rounded-full">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#b47a16] transition-colors line-clamp-1">
                          {preset.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 line-clamp-2 mt-0.5">
                          {preset.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="mt-2 text-[10px] font-bold text-[#b47a16] group-hover:text-[#0a1829] flex items-center gap-1"
                      >
                        <span>{isCurrent ? 'Currently Applied' : 'Use This Image'}</span>
                        &rarr;
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Display Mode & Opacity Settings */}
          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#b47a16]" />
              <span>Image Placement &amp; Blend Controls</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Placement Modes */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Visual Placement Mode:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => onChangeDisplayMode('card-backdrop')}
                    className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1 ${
                      displayMode === 'card-backdrop'
                        ? 'border-[#d89e28] bg-amber-50/70 text-[#0a1829] font-bold shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Layers className="w-4 h-4 text-[#d89e28]" />
                    <span className="text-[10.5px]">Graphic Backdrop</span>
                  </button>

                  <button
                    onClick={() => onChangeDisplayMode('full-banner')}
                    className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1 ${
                      displayMode === 'full-banner'
                        ? 'border-[#d89e28] bg-amber-50/70 text-[#0a1829] font-bold shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#d89e28]" />
                    <span className="text-[10.5px]">Full Banner</span>
                  </button>

                  <button
                    onClick={() => onChangeDisplayMode('split-visual')}
                    className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1 ${
                      displayMode === 'split-visual'
                        ? 'border-[#d89e28] bg-amber-50/70 text-[#0a1829] font-bold shadow-2xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Eye className="w-4 h-4 text-[#d89e28]" />
                    <span className="text-[10.5px]">Split Showcase</span>
                  </button>
                </div>
                <p className="text-[10.5px] text-slate-500">
                  {displayMode === 'card-backdrop' && 'Image is layered behind the iconic soaring golden arrow graphic.'}
                  {displayMode === 'full-banner' && 'Image expands as a subtle executive background across the entire hero.'}
                  {displayMode === 'split-visual' && 'Image is showcased prominently alongside the corporate advisory text.'}
                </p>
              </div>

              {/* Opacity Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">
                    Image Opacity &amp; Tint:
                  </label>
                  <span className="text-xs font-mono font-bold text-[#b47a16]">
                    {imageOpacity}%
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={imageOpacity}
                  onChange={(e) => onChangeOpacity(Number(e.target.value))}
                  className="w-full accent-[#d89e28] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Subtle Texture (20%)</span>
                  <span>Balanced (60%)</span>
                  <span>Prominent (100%)</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onResetImages}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-bold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All to Default Corporate Visuals</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#0a1829] hover:bg-[#15304f] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer"
          >
            Done &bull; Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};
