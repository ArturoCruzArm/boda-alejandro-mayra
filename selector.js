// ========================================
// GLOBAL VARIABLES
// ========================================
// NOTA: Esta lista se generará automáticamente cuando se suban las fotos
// Puedes usar el script generar_lista_fotos.py para actualizarla
const photos = [
    'fotos/DJI_20251213180421_0310_D.webp',
    'fotos/DJI_20251213180422_0311_D.webp',
    'fotos/DJI_20251213180423_0312_D.webp',
    'fotos/DJI_20251213180425_0313_D.webp',
    'fotos/DJI_20251213180426_0314_D.webp',
    'fotos/DJI_20251213180427_0315_D.webp',
    'fotos/DJI_20251213180428_0316_D.webp',
    'fotos/DJI_20251213180429_0317_D.webp',
    'fotos/DJI_20251213180431_0318_D.webp',
    'fotos/DJI_20251213180432_0319_D.webp',
    'fotos/DJI_20251213180433_0320_D.webp',
    'fotos/DJI_20251213184324_0321_D.webp',
    'fotos/DJI_20251213184341_0322_D.webp',
    'fotos/DJI_20251213190352_0323_D.webp',
    'fotos/DJI_20251213_161043_999.webp',
    'fotos/DJI_20251213_161244_735.webp',
    'fotos/DJI_20251213_161405_689.webp',
    'fotos/DJI_20251213_161413_911.webp',
    'fotos/DJI_20251213_161418_020.webp',
    'fotos/DJI_20251213_161426_047.webp',
    'fotos/DJI_20251213_161435_542.webp',
    'fotos/DJI_20251213_161438_841.webp',
    'fotos/DJI_20251213_161444_151.webp',
    'fotos/DJI_20251213_161526_363.webp',
    'fotos/DJI_20251213_161533_921.webp',
    'fotos/DJI_20251213_161543_538.webp',
    'fotos/DJI_20251213_161609_803.webp',
    'fotos/DJI_20251213_161618_623.webp',
    'fotos/DJI_20251213_161643_658.webp',
    'fotos/DJI_20251213_161658_642_burst_1.webp',
    'fotos/DJI_20251213_161658_642_burst_2.webp',
    'fotos/DJI_20251213_161701_838.webp',
    'fotos/DJI_20251213_161711_364.webp',
    'fotos/DJI_20251213_161910_332.webp',
    'fotos/DJI_20251213_161914_261.webp',
    'fotos/DJI_20251213_161952_048.webp',
    'fotos/DJI_20251213_162052_256.webp',
    'fotos/DJI_20251213_162054_716.webp',
    'fotos/DJI_20251213_162323_838.webp',
    'fotos/DJI_20251213_162331_821.webp',
    'fotos/DJI_20251213_162430_240.webp',
    'fotos/DJI_20251213_162433_212.webp',
    'fotos/DJI_20251213_162511_836.webp',
    'fotos/DJI_20251213_162515_692.webp',
    'fotos/DJI_20251213_162530_617.webp',
    'fotos/DJI_20251213_162606_948.webp',
    'fotos/DJI_20251213_162611_251.webp',
    'fotos/DJI_20251213_162701_863.webp',
    'fotos/DJI_20251213_162707_233.webp',
    'fotos/DJI_20251213_162722_142.webp',
    'fotos/DJI_20251213_162725_186.webp',
    'fotos/DJI_20251213_162752_265.webp',
    'fotos/DJI_20251213_162800_935.webp',
    'fotos/DJI_20251213_162858_716.webp',
    'fotos/DJI_20251213_162902_750.webp',
    'fotos/DJI_20251213_162904_940.webp',
    'fotos/DJI_20251213_163441_425.webp',
    'fotos/DJI_20251213_163531_618.webp',
    'fotos/DJI_20251213_163606_209.webp',
    'fotos/DJI_20251213_163608_368.webp',
    'fotos/DJI_20251213_163611_759.webp',
    'fotos/DJI_20251213_163937_336.webp',
    'fotos/DJI_20251213_163945_662.webp',
    'fotos/DJI_20251213_163949_141.webp',
    'fotos/DJI_20251213_163953_429.webp',
    'fotos/DJI_20251213_164029_908.webp',
    'fotos/DJI_20251213_164126_970.webp',
    'fotos/DJI_20251213_164149_470.webp',
    'fotos/DJI_20251213_164200_164.webp',
    'fotos/DJI_20251213_164202_232.webp',
    'fotos/DJI_20251213_164300_464.webp',
    'fotos/DJI_20251213_164313_947.webp',
    'fotos/DJI_20251213_164347_143.webp',
    'fotos/DJI_20251213_164350_291.webp',
    'fotos/DJI_20251213_164604_423.webp',
    'fotos/DJI_20251213_164606_762.webp',
    'fotos/DJI_20251213_164617_624.webp',
    'fotos/DJI_20251213_164628_031.webp',
    'fotos/DJI_20251213_164631_751.webp',
    'fotos/DJI_20251213_164639_444.webp',
    'fotos/DJI_20251213_165155_512.webp',
    'fotos/DJI_20251213_165159_816.webp',
    'fotos/DJI_20251213_165202_172.webp',
    'fotos/DJI_20251213_165231_107.webp',
    'fotos/DJI_20251213_165235_952.webp',
    'fotos/DJI_20251213_165240_167.webp',
    'fotos/DJI_20251213_165242_701.webp',
    'fotos/DJI_20251213_165411_952.webp',
    'fotos/DJI_20251213_165458_288.webp',
    'fotos/DJI_20251213_165502_382.webp',
    'fotos/DJI_20251213_165509_162.webp',
    'fotos/DJI_20251213_165514_382.webp',
    'fotos/DJI_20251213_172221_958.webp',
    'fotos/DJI_20251213_172224_778.webp',
    'fotos/DJI_20251213_172253_293.webp',
    'fotos/DJI_20251213_172259_038.webp',
    'fotos/DJI_20251213_172311_609.webp',
    'fotos/DJI_20251213_172336_749.webp',
    'fotos/DJI_20251213_172345_823.webp',
    'fotos/DJI_20251213_172348_268.webp',
    'fotos/DJI_20251213_172408_924.webp',
    'fotos/DJI_20251213_173038_867.webp',
    'fotos/DJI_20251213_173108_657.webp',
    'fotos/DJI_20251213_173121_092.webp',
    'fotos/DJI_20251213_173143_367.webp',
    'fotos/DJI_20251213_173147_175.webp',
    'fotos/DJI_20251213_173150_117.webp',
    'fotos/DJI_20251213_173154_421.webp',
    'fotos/DJI_20251213_173157_752.webp',
    'fotos/DJI_20251213_173338_447.webp',
    'fotos/DJI_20251213_173346_382.webp',
    'fotos/DJI_20251213_173352_590.webp',
    'fotos/DJI_20251213_173354_947.webp',
    'fotos/DJI_20251213_173358_367.webp',
    'fotos/DJI_20251213_173408_446.webp',
    'fotos/DJI_20251213_173412_076.webp',
    'fotos/DJI_20251213_173450_086.webp',
    'fotos/DJI_20251213_173452_921.webp',
    'fotos/DJI_20251213_173456_116.webp',
    'fotos/DJI_20251213_173459_386.webp',
    'fotos/DJI_20251213_173501_978.webp',
    'fotos/DJI_20251213_173504_170.webp',
    'fotos/DJI_20251213_173507_201.webp',
    'fotos/DJI_20251213_173509_764.webp',
    'fotos/DJI_20251213_173516_320.webp',
    'fotos/DJI_20251213_173519_170.webp',
    'fotos/DSC_7119.webp',
    'fotos/DSC_7120.webp',
    'fotos/DSC_7121.webp',
    'fotos/DSC_7122.webp',
    'fotos/DSC_7123.webp',
    'fotos/DSC_7124.webp',
    'fotos/DSC_7125.webp',
    'fotos/DSC_7126.webp',
    'fotos/DSC_7127.webp',
    'fotos/DSC_7128.webp',
    'fotos/DSC_7129.webp',
    'fotos/DSC_7130.webp',
    'fotos/DSC_7131.webp',
    'fotos/DSC_7132.webp',
    'fotos/DSC_7133.webp',
    'fotos/DSC_7134.webp',
    'fotos/DSC_7135.webp',
    'fotos/DSC_7136.webp',
    'fotos/DSC_7137.webp',
    'fotos/DSC_7138.webp',
    'fotos/DSC_7139.webp',
    'fotos/DSC_7140.webp',
    'fotos/DSC_7141.webp',
    'fotos/DSC_7142.webp',
    'fotos/DSC_7143.webp',
    'fotos/DSC_7144.webp',
    'fotos/DSC_7145.webp',
    'fotos/DSC_7146.webp',
    'fotos/DSC_7147.webp',
    'fotos/DSC_7148.webp',
    'fotos/DSC_7149.webp',
    'fotos/DSC_7150.webp',
    'fotos/DSC_7151.webp',
    'fotos/DSC_7152.webp',
    'fotos/DSC_7153.webp',
    'fotos/DSC_7154.webp',
    'fotos/DSC_7155.webp',
    'fotos/DSC_7156.webp',
    'fotos/DSC_7157.webp',
    'fotos/DSC_7158.webp',
    'fotos/DSC_7159.webp',
    'fotos/DSC_7160.webp',
    'fotos/DSC_7161.webp',
    'fotos/DSC_7162.webp',
    'fotos/DSC_7163.webp',
    'fotos/DSC_7164.webp',
    'fotos/DSC_7165.webp',
    'fotos/DSC_7166.webp',
    'fotos/DSC_7167.webp',
    'fotos/DSC_7168.webp',
    'fotos/DSC_7169.webp',
    'fotos/DSC_7170.webp',
    'fotos/DSC_7171.webp',
    'fotos/DSC_7172.webp',
    'fotos/DSC_7173.webp',
    'fotos/DSC_7174.webp',
    'fotos/DSC_7175.webp',
    'fotos/DSC_7176.webp',
    'fotos/DSC_7177.webp',
    'fotos/DSC_7178.webp',
    'fotos/DSC_7179.webp',
    'fotos/DSC_7180.webp',
    'fotos/DSC_7181.webp',
    'fotos/DSC_7182.webp',
    'fotos/DSC_7183.webp',
    'fotos/DSC_7184.webp',
    'fotos/DSC_7185.webp',
    'fotos/DSC_7186.webp',
    'fotos/DSC_7187.webp',
    'fotos/DSC_7188.webp',
    'fotos/DSC_7189.webp',
    'fotos/DSC_7190.webp',
    'fotos/DSC_7191.webp',
    'fotos/DSC_7192.webp',
    'fotos/DSC_7193.webp',
    'fotos/DSC_7194.webp',
    'fotos/DSC_7195.webp',
    'fotos/DSC_7196.webp',
    'fotos/DSC_7197.webp',
    'fotos/DSC_7198.webp',
    'fotos/DSC_7199.webp',
    'fotos/DSC_7200.webp',
    'fotos/DSC_7201.webp',
    'fotos/DSC_7202.webp',
    'fotos/DSC_7203.webp',
    'fotos/DSC_7204.webp',
    'fotos/DSC_7205.webp',
    'fotos/DSC_7206.webp',
    'fotos/DSC_7207.webp',
    'fotos/DSC_7208.webp',
    'fotos/DSC_7209.webp',
    'fotos/DSC_7210.webp',
    'fotos/DSC_7211.webp',
    'fotos/DSC_7212.webp',
    'fotos/DSC_7213.webp',
    'fotos/DSC_7214.webp',
    'fotos/DSC_7215.webp',
    'fotos/DSC_7216.webp',
    'fotos/DSC_7217.webp',
    'fotos/DSC_7218.webp',
    'fotos/DSC_7219.webp',
    'fotos/DSC_7220.webp',
    'fotos/DSC_7221.webp',
    'fotos/DSC_7222.webp',
    'fotos/DSC_7223.webp',
    'fotos/DSC_7224.webp',
    'fotos/DSC_7225.webp',
    'fotos/DSC_7226.webp',
    'fotos/DSC_7227.webp',
    'fotos/DSC_7228.webp',
    'fotos/DSC_7229.webp',
    'fotos/DSC_7230.webp',
    'fotos/DSC_7231.webp',
    'fotos/DSC_7232.webp',
    'fotos/DSC_7233.webp',
    'fotos/DSC_7234.webp',
    'fotos/DSC_7235.webp',
    'fotos/DSC_7236.webp',
    'fotos/DSC_7237.webp',
    'fotos/DSC_7238.webp',
    'fotos/DSC_7239.webp',
    'fotos/DSC_7240.webp',
    'fotos/DSC_7241.webp',
    'fotos/DSC_7242.webp',
    'fotos/DSC_7243.webp',
    'fotos/DSC_7244.webp',
    'fotos/DSC_7245.webp',
    'fotos/DSC_7247.webp',
    'fotos/DSC_7248.webp',
    'fotos/DSC_7249.webp',
    'fotos/DSC_7250.webp',
    'fotos/DSC_7251.webp',
    'fotos/DSC_7252.webp',
    'fotos/DSC_7253.webp',
    'fotos/DSC_7254.webp',
    'fotos/DSC_7255.webp',
    'fotos/DSC_7256.webp',
    'fotos/DSC_7257.webp',
    'fotos/DSC_7258.webp',
    'fotos/DSC_7259.webp',
    'fotos/DSC_7260.webp',
    'fotos/DSC_7261.webp',
    'fotos/DSC_7262.webp',
    'fotos/DSC_7263.webp',
    'fotos/DSC_7264.webp',
    'fotos/DSC_7265.webp',
    'fotos/DSC_7266.webp',
    'fotos/DSC_7267.webp',
    'fotos/DSC_7268.webp',
    'fotos/DSC_7269.webp',
    'fotos/DSC_7270.webp',
    'fotos/DSC_7271.webp',
    'fotos/DSC_7272.webp',
    'fotos/DSC_7273.webp',
    'fotos/DSC_7274.webp',
    'fotos/DSC_7275.webp',
    'fotos/DSC_7276.webp',
    'fotos/DSC_7277.webp',
    'fotos/DSC_7278.webp',
    'fotos/DSC_7279.webp',
    'fotos/DSC_7280.webp',
    'fotos/DSC_7281.webp',
    'fotos/DSC_7282.webp',
    'fotos/DSC_7283.webp',
    'fotos/DSC_7284.webp',
    'fotos/DSC_7285.webp',
    'fotos/DSC_7286.webp',
    'fotos/DSC_7287.webp',
    'fotos/DSC_7288.webp',
    'fotos/DSC_7289.webp',
    'fotos/DSC_7290.webp',
    'fotos/DSC_7291.webp',
    'fotos/DSC_7292.webp',
    'fotos/DSC_7293.webp',
    'fotos/DSC_7294.webp',
    'fotos/DSC_7295.webp',
    'fotos/DSC_7296.webp',
    'fotos/DSC_7297.webp',
    'fotos/DSC_7298.webp',
    'fotos/DSC_7299.webp',
    'fotos/DSC_7300.webp',
    'fotos/DSC_7301.webp',
    'fotos/DSC_7302.webp',
    'fotos/DSC_7303.webp',
    'fotos/DSC_7304.webp',
    'fotos/DSC_7305.webp',
    'fotos/DSC_7306.webp',
    'fotos/DSC_7307.webp',
    'fotos/DSC_7308.webp',
    'fotos/DSC_7309.webp',
    'fotos/DSC_7310.webp',
    'fotos/DSC_7311.webp',
    'fotos/DSC_7312.webp',
    'fotos/DSC_7313.webp',
    'fotos/DSC_7314.webp',
    'fotos/DSC_7315.webp',
    'fotos/DSC_7316.webp',
    'fotos/DSC_7317.webp',
    'fotos/DSC_7318.webp',
    'fotos/DSC_7319.webp',
    'fotos/DSC_7320.webp',
    'fotos/DSC_7321.webp',
    'fotos/DSC_7322.webp',
    'fotos/DSC_7323.webp',
    'fotos/DSC_7324.webp',
    'fotos/DSC_7325.webp',
    'fotos/DSC_7326.webp',
    'fotos/DSC_7327.webp',
    'fotos/DSC_7328.webp',
    'fotos/DSC_7329.webp',
    'fotos/DSC_7330.webp',
    'fotos/DSC_7331.webp',
    'fotos/DSC_7332.webp',
    'fotos/DSC_7333.webp',
    'fotos/DSC_7334.webp',
    'fotos/DSC_7335.webp',
    'fotos/DSC_7336.webp',
    'fotos/DSC_7337.webp',
    'fotos/DSC_7338.webp',
    'fotos/DSC_7339.webp',
    'fotos/DSC_7340.webp',
    'fotos/DSC_7341.webp',
    'fotos/DSC_7342.webp',
    'fotos/DSC_7343.webp',
    'fotos/DSC_7344.webp',
    'fotos/DSC_7345.webp',
    'fotos/DSC_7346.webp',
    'fotos/DSC_7347.webp',
    'fotos/DSC_7348.webp',
    'fotos/DSC_7349.webp',
    'fotos/DSC_7350.webp',
    'fotos/DSC_7351.webp',
    'fotos/DSC_7352.webp',
    'fotos/DSC_7353.webp',
    'fotos/DSC_7354.webp',
    'fotos/DSC_7355.webp',
    'fotos/DSC_7356.webp',
    'fotos/DSC_7357.webp',
    'fotos/DSC_7358.webp',
    'fotos/DSC_7359.webp',
    'fotos/DSC_7360.webp',
    'fotos/DSC_7361.webp',
    'fotos/DSC_7362.webp',
    'fotos/DSC_7363.webp',
    'fotos/DSC_7364.webp',
    'fotos/DSC_7365.webp',
    'fotos/DSC_7366.webp',
    'fotos/DSC_7367.webp',
    'fotos/DSC_7368.webp',
    'fotos/DSC_7369.webp',
    'fotos/DSC_7370.webp',
    'fotos/DSC_7371.webp',
    'fotos/DSC_7372.webp',
    'fotos/DSC_7373.webp',
    'fotos/DSC_7374.webp',
    'fotos/DSC_7375.webp',
    'fotos/DSC_7376.webp',
    'fotos/DSC_7377.webp',
    'fotos/DSC_7378.webp',
    'fotos/DSC_7379.webp',
    'fotos/DSC_7380.webp',
    'fotos/DSC_7381.webp',
    'fotos/DSC_7382.webp',
    'fotos/DSC_7383.webp',
    'fotos/DSC_7384.webp',
    'fotos/DSC_7385.webp',
    'fotos/DSC_7386.webp',
    'fotos/DSC_7387.webp',
    'fotos/DSC_7388.webp',
    'fotos/DSC_7389.webp',
    'fotos/DSC_7390.webp',
    'fotos/DSC_7391.webp',
    'fotos/DSC_7392.webp',
    'fotos/DSC_7393.webp',
    'fotos/DSC_7394.webp',
    'fotos/DSC_7395.webp',
    'fotos/DSC_7396.webp',
    'fotos/DSC_7397.webp',
    'fotos/DSC_7398.webp',
    'fotos/DSC_7399.webp',
    'fotos/DSC_7400.webp',
    'fotos/DSC_7401.webp',
    'fotos/DSC_7402.webp',
    'fotos/DSC_7403.webp',
    'fotos/DSC_7404.webp',
    'fotos/DSC_7405.webp',
    'fotos/DSC_7406.webp',
    'fotos/DSC_7407.webp',
    'fotos/DSC_7408.webp',
    'fotos/DSC_7409.webp',
    'fotos/DSC_7410.webp',
    'fotos/DSC_7411.webp',
    'fotos/DSC_7412.webp',
    'fotos/DSC_7413.webp',
    'fotos/DSC_7414.webp',
    'fotos/DSC_7415.webp',
    'fotos/DSC_7416.webp',
    'fotos/DSC_7417.webp',
    'fotos/DSC_7418.webp',
    'fotos/DSC_7419.webp',
    'fotos/DSC_7420.webp',
    'fotos/DSC_7421.webp',
    'fotos/DSC_7422.webp',
    'fotos/DSC_7423.webp',
    'fotos/DSC_7424.webp',
    'fotos/DSC_7425.webp',
    'fotos/DSC_7426.webp',
    'fotos/DSC_7427.webp',
    'fotos/DSC_7428.webp',
    'fotos/DSC_7429.webp',
    'fotos/DSC_7430.webp',
    'fotos/DSC_7431.webp',
    'fotos/DSC_7432.webp',
    'fotos/DSC_7433.webp',
    'fotos/DSC_7434.webp',
    'fotos/DSC_7435.webp',
    'fotos/DSC_7436.webp',
    'fotos/DSC_7437.webp',
    'fotos/DSC_7438.webp',
    'fotos/DSC_7439.webp',
    'fotos/DSC_7440.webp',
    'fotos/DSC_7441.webp',
    'fotos/DSC_7442.webp',
    'fotos/DSC_7443.webp',
    'fotos/DSC_7444.webp',
    'fotos/DSC_7445.webp',
    'fotos/DSC_7446.webp',
    'fotos/DSC_7447.webp',
    'fotos/DSC_7448.webp',
    'fotos/DSC_7449.webp',
    'fotos/DSC_7450.webp',
    'fotos/DSC_7451.webp',
    'fotos/DSC_7452.webp',
    'fotos/DSC_7453.webp',
    'fotos/DSC_7454.webp',
    'fotos/DSC_7455.webp',
    'fotos/DSC_7456.webp',
    'fotos/DSC_7457.webp',
    'fotos/DSC_7458.webp',
    'fotos/DSC_7459.webp',
    'fotos/DSC_7460.webp',
    'fotos/DSC_7461.webp',
    'fotos/DSC_7462.webp',
    'fotos/DSC_7463.webp',
    'fotos/DSC_7464.webp',
    'fotos/DSC_7465.webp',
    'fotos/DSC_7466.webp',
    'fotos/DSC_7467.webp',
    'fotos/DSC_7468.webp',
    'fotos/DSC_7469.webp',
    'fotos/DSC_7470.webp',
    'fotos/DSC_7471.webp',
    'fotos/DSC_7472.webp',
    'fotos/DSC_7473.webp',
    'fotos/DSC_7474.webp',
    'fotos/DSC_7475.webp',
    'fotos/DSC_7476.webp',
    'fotos/DSC_7477.webp',
    'fotos/DSC_7478.webp',
    'fotos/DSC_7479.webp',
    'fotos/DSC_7480.webp',
    'fotos/DSC_7481.webp',
    'fotos/DSC_7482.webp',
    'fotos/IMG_6670.webp',
    'fotos/IMG_6671.webp',
    'fotos/IMG_6672.webp',
    'fotos/IMG_6676.webp',
    'fotos/IMG_6677.webp',
    'fotos/IMG_6678.webp',
    'fotos/IMG_6679.webp',
    'fotos/IMG_6680.webp',
    'fotos/IMG_6681.webp',
    'fotos/IMG_6682.webp',
    'fotos/IMG_6683.webp',
    'fotos/IMG_6684.webp',
    'fotos/IMG_6685.webp',
    'fotos/IMG_6686.webp',
    'fotos/IMG_6687.webp',
    'fotos/IMG_6688.webp',
    'fotos/IMG_6689.webp',
    'fotos/IMG_6690.webp',
    'fotos/IMG_6691.webp',
    'fotos/IMG_6692.webp',
    'fotos/IMG_6693.webp',
    'fotos/IMG_6694.webp',
    'fotos/IMG_6695.webp',
    'fotos/IMG_6696.webp',
    'fotos/IMG_6697.webp',
    'fotos/IMG_6698.webp',
    'fotos/IMG_6699.webp',
    'fotos/IMG_6700.webp',
    'fotos/IMG_6701.webp',
    'fotos/IMG_6702.webp',
    'fotos/IMG_6703.webp',
    'fotos/IMG_6704.webp',
    'fotos/IMG_6705.webp',
    'fotos/IMG_6706.webp',
    'fotos/IMG_6707.webp',
    'fotos/IMG_6708.webp',
    'fotos/IMG_6709.webp',
    'fotos/IMG_6710.webp',
    'fotos/IMG_6711.webp',
    'fotos/IMG_6712.webp',
    'fotos/IMG_6713.webp',
    'fotos/IMG_6714.webp',
    'fotos/IMG_6715.webp',
    'fotos/IMG_6716.webp',
    'fotos/IMG_6717.webp',
    'fotos/IMG_6718.webp',
    'fotos/IMG_6719.webp',
    'fotos/IMG_6720.webp',
    'fotos/IMG_6721.webp',
    'fotos/IMG_6722.webp',
    'fotos/IMG_6723.webp',
    'fotos/IMG_6724.webp',
    'fotos/IMG_6725.webp',
    'fotos/IMG_6726.webp',
    'fotos/IMG_6727.webp',
    'fotos/IMG_6728.webp',
    'fotos/IMG_6729.webp',
    'fotos/IMG_6730.webp',
    'fotos/IMG_6731.webp',
    'fotos/IMG_6732.webp',
    'fotos/IMG_6733.webp',
    'fotos/IMG_6734.webp',
    'fotos/IMG_6735.webp',
    'fotos/IMG_6736.webp',
    'fotos/IMG_6737.webp',
    'fotos/IMG_6738.webp',
    'fotos/IMG_6739.webp',
    'fotos/IMG_6740.webp',
    'fotos/IMG_6741.webp',
    'fotos/IMG_6742.webp',
    'fotos/IMG_6743.webp',
    'fotos/IMG_6744.webp',
    'fotos/IMG_6745.webp',
    'fotos/IMG_6746.webp',
    'fotos/IMG_6747.webp',
    'fotos/IMG_6748.webp',
    'fotos/IMG_6749.webp',
    'fotos/IMG_6750.webp',
    'fotos/IMG_6751.webp',
    'fotos/IMG_6752.webp',
    'fotos/IMG_6753.webp',
    'fotos/IMG_6754.webp',
    'fotos/IMG_6755.webp',
    'fotos/IMG_6756.webp',
    'fotos/IMG_6757.webp',
    'fotos/IMG_6758.webp',
    'fotos/IMG_6759.webp',
    'fotos/IMG_6760.webp',
    'fotos/IMG_6761.webp',
    'fotos/IMG_6762.webp',
    'fotos/IMG_6763.webp',
    'fotos/IMG_6764.webp',
    'fotos/IMG_6765.webp',
    'fotos/IMG_6766.webp',
    'fotos/IMG_6767.webp',
    'fotos/IMG_6768.webp',
    'fotos/IMG_6769.webp',
    'fotos/IMG_6770.webp',
    'fotos/IMG_6771.webp',
    'fotos/IMG_6772.webp',
    'fotos/IMG_6773.webp',
    'fotos/IMG_6774.webp',
    'fotos/IMG_6775.webp',
    'fotos/IMG_6776.webp',
    'fotos/IMG_6777.webp',
    'fotos/IMG_6778.webp',
    'fotos/IMG_6779.webp',
    'fotos/IMG_6780.webp',
    'fotos/IMG_6781.webp',
    'fotos/IMG_6782.webp',
    'fotos/IMG_6783.webp',
    'fotos/IMG_6784.webp',
    'fotos/IMG_6785.webp',
    'fotos/IMG_6786.webp',
    'fotos/IMG_6787.webp',
    'fotos/IMG_6788.webp',
    'fotos/IMG_6789.webp',
    'fotos/IMG_6790.webp',
    'fotos/IMG_6791.webp',
    'fotos/IMG_6792.webp',
    'fotos/IMG_6794.webp',
    'fotos/IMG_6795.webp',
    'fotos/IMG_6796.webp',
    'fotos/IMG_6797.webp',
    'fotos/IMG_6798.webp',
    'fotos/IMG_6799.webp',
    'fotos/IMG_6800.webp',
    'fotos/IMG_6801.webp',
    'fotos/IMG_6802.webp',
    'fotos/IMG_6803.webp',
    'fotos/IMG_6804.webp',
    'fotos/IMG_6805.webp',
    'fotos/IMG_6806.webp',
    'fotos/IMG_6807.webp',
    'fotos/IMG_6808.webp',
    'fotos/IMG_6809.webp',
    'fotos/IMG_6810.webp',
    'fotos/IMG_6811.webp',
    'fotos/IMG_6812.webp',
    'fotos/IMG_6813.webp',
    'fotos/IMG_6814.webp',
    'fotos/IMG_6815.webp',
    'fotos/IMG_6816.webp',
    'fotos/IMG_6817.webp',
    'fotos/IMG_6818.webp',
    'fotos/IMG_6819.webp',
    'fotos/IMG_6820.webp',
    'fotos/IMG_6821.webp',
    'fotos/IMG_6822.webp',
    'fotos/IMG_6823.webp',
    'fotos/IMG_6824.webp',
    'fotos/IMG_6825.webp',
    'fotos/IMG_6826.webp',
    'fotos/IMG_6827.webp',
    'fotos/IMG_6828.webp',
    'fotos/IMG_6829.webp',
    'fotos/IMG_6830.webp'
];

const STORAGE_KEY = 'boda_alejandro_mayra_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// HELPER FUNCTIONS
// ========================================
function isYouTubeVideo(item) {
    return item.startsWith('youtube:');
}

function getYouTubeId(item) {
    return item.replace('youtube:', '');
}

function getYouTubeThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function getYouTubeEmbedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún. Por favor, sube las fotos al directorio images/</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        // Determine if it's a YouTube video or image
        const isVideo = isYouTubeVideo(photo);
        const displayNumber = isVideo ? `Video ${index + 1}` : `Foto ${index + 1}`;

        let mediaHTML;
        if (isVideo) {
            const videoId = getYouTubeId(photo);
            const thumbnail = getYouTubeThumbnail(videoId);
            mediaHTML = `
                <div class="photo-image-container video-container">
                    <img src="${thumbnail}" alt="${displayNumber}" loading="lazy">
                    <div class="video-overlay">
                        <div class="play-button">▶</div>
                    </div>
                </div>
            `;
        } else {
            mediaHTML = `
                <div class="photo-image-container">
                    <img src="${photo}" alt="${displayNumber}" loading="lazy">
                </div>
            `;
        }

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const isVideo = isYouTubeVideo(photo);
    const displayNumber = isVideo ? `Video ${index + 1}` : `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    // Clear previous content and add new media
    if (isVideo) {
        const videoId = getYouTubeId(photo);
        const embedUrl = getYouTubeEmbedUrl(videoId);
        modalImageContainer.innerHTML = `
            <iframe id="modalImage"
                src="${embedUrl}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="youtube-iframe">
            </iframe>
            <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
        `;
    } else {
        modalImageContainer.innerHTML = `
            <img id="modalImage" src="${photo}" alt="${displayNumber}">
            <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
        `;
    }

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {

    const modal = document.getElementById('photoModal');

    modal.classList.remove('active');

    document.body.style.overflow = 'auto';

    currentPhotoIndex = null;

}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Boda Alejandro & Mayra',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-alejandro-mayra-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💒 SELECCIÓN DE FOTOS - BODA ALEJANDRO & MAYRA\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
    console.log('Selecciones cargadas:', photoSelections);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});
    // Navigation button event listeners
    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });
    
    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

// ========================================
// DISABLE RIGHT CLICK ON IMAGES
